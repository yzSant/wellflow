const MQTT_URL = "wss://broker.hivemq.com:8884/mqtt";
const TOPIC = "wokwi/sensores";
const MAX_POINTS = 60;

const statusEl = document.getElementById('status');
const logEl = document.getElementById('log');

function log(msg){
  const now = new Date().toLocaleTimeString();
  statusEl.textContent = msg;
  logEl.textContent = now + " — " + msg;
  console.debug(msg);
}

function createChart(ctx){
  return new Chart(ctx, {
    type: 'line',
    data: { 
      labels: Array(MAX_POINTS).fill(''), 
      datasets: [{
        data: Array(MAX_POINTS).fill(null),
        fill:false,
        borderWidth:2,
        tension:0.15,
        pointRadius:0
      }]
    },
    options: {
      animation:false,
      responsive:true,
      maintainAspectRatio:false,
      scales: { x:{display:false}, y:{beginAtZero:true} },
      plugins:{ legend:{display:false} }
    }
  });
}

const chartTemp = createChart(document.getElementById('chartTemp').getContext('2d'));
const chartHum  = createChart(document.getElementById('chartHum').getContext('2d'));
const chartLum  = createChart(document.getElementById('chartLum').getContext('2d'));

function shiftAndPush(chart, value){
  chart.data.datasets[0].data.push(value);
  if (chart.data.datasets[0].data.length > MAX_POINTS)
    chart.data.datasets[0].data.shift();
  chart.update('none');
}

log('Conectando ao broker...');

const client = mqtt.connect(MQTT_URL, { connectTimeout: 4000 });

client.on('connect', () => {
  log('Conectado ao broker.hivemq.com');
  client.subscribe(TOPIC, (err) => {
    if (err) log('Erro ao inscrever: ' + err.message);
    else log('Inscrito no tópico: ' + TOPIC);
  });
});

client.on('reconnect', () => log('Reconectando...'));
client.on('error', (err) => log('Erro MQTT: ' + (err?.message ?? err)));
client.on('offline', () => log('Cliente offline'));

client.on('message', (topic, message) => {
  try {
    const data = JSON.parse(message.toString());

    document.getElementById('tempValue').textContent =
      (data.temperatura ?? data.temp ?? '--') + ' °C';

    document.getElementById('humValue').textContent =
      (data.umidade ?? data.humidity ?? '--') + ' %';

    document.getElementById('lumValue').textContent =
      (data.luminosidade ?? data.light ?? '--');

    let s = data.status ?? '--';
    const t = parseFloat(data.temperatura ?? data.temp);

    if (!data.status && !isNaN(t)){
      if (t > 40) s = "Desconfortável";
      else if (t > 25) s = "Podemos Melhorar";
      else s = "Agradável";
    }

    document.getElementById('statusValue').textContent = s;

    shiftAndPush(chartTemp, parseFloat(data.temperatura ?? data.temp) || null);
    shiftAndPush(chartHum,  parseFloat(data.umidade ?? data.humidity) || null);
    shiftAndPush(chartLum,  Number(data.luminosidade ?? data.light) || null);

    log("Mensagem recebida");
  } catch (e) {
    log("Erro ao parsear mensagem: " + e.message);
  }
});
