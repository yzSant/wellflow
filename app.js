// Simple dashboard that polls the API and updates 3 charts in real-time
const API = "http://20.186.91.136:3000/sensores"; // sua API
const INTERVAL = 2000;
const MAX_POINTS = 60;

fetch("http://20.186.91.136:3000/sensores")
  .then(r => r.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));


const el = {
  tempValue: document.getElementById('tempValue'),
  humValue: document.getElementById('humValue'),
  lumValue: document.getElementById('lumValue'),
  statusValue: document.getElementById('statusValue'),
  log: document.getElementById('log'),
  btnRefresh: document.getElementById('btnRefresh'),
  chkSim: document.getElementById('chkSim'),
};

function addLog(msg) {
  el.log.textContent = msg;
  console.debug(msg);
}

// Chart helper
function createChart(ctx) {
  return new Chart(ctx, {
    type: 'line',
    data: {
      labels: Array(MAX_POINTS).fill(''),
      datasets: [{
        label: '',
        data: Array(MAX_POINTS).fill(null),
        fill: false,
        borderWidth: 2,
        tension: 0.15,
        pointRadius: 0,
      }]
    },
    options: {
      animation: false,
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: { display: false },
        y: { beginAtZero: true }
      },
      plugins: { legend: { display: false } }
    }
  });
}

const chartTemp = createChart(document.getElementById('chartTemp').getContext('2d'));
const chartHum  = createChart(document.getElementById('chartHum').getContext('2d'));
const chartLum  = createChart(document.getElementById('chartLum').getContext('2d'));

function shiftAndPush(chart, value) {
  chart.data.datasets[0].data.push(value);
  if (chart.data.datasets[0].data.length > MAX_POINTS) chart.data.datasets[0].data.shift();
  chart.update('none');
}

let sim = false;

async function fetchSensors() {
  try {
    const res = await fetch(API, { cache: 'no-store' });
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const data = await res.json();
    updateUI(data);
    addLog('Atualizado: ' + new Date().toLocaleTimeString());
    return data;
  } catch (err) {
    addLog('Erro ao acessar API: ' + err.message + (sim ? ' (modo simulação ON)' : ''));
    if (sim) {
      // simulated data
      const fake = {
        temperatura: (20 + Math.random()*8).toFixed(1),
        umidade: (40 + Math.random()*25).toFixed(1),
        luminosidade: Math.round(500 + Math.random()*2000),
        status: ['Agradavel','Podemos Melhorar','Desconfortavel'][Math.floor(Math.random()*3)]
      };
      updateUI(fake);
      return fake;
    }
    return null;
  }
}

function updateUI(data) {
  if (!data) return;
  el.tempValue.textContent = (data.temperatura ?? '--') + ' °C';
  el.humValue.textContent  = (data.umidade ?? '--') + ' %';
  el.lumValue.textContent  = (data.luminosidade ?? '--');
  el.statusValue.textContent = data.status ?? '--';

  const t = parseFloat(data.temperatura) || null;
  const h = parseFloat(data.umidade) || null;
  const l = Number(data.luminosidade) || null;

  shiftAndPush(chartTemp, t);
  shiftAndPush(chartHum, h);
  shiftAndPush(chartLum, l);
}

// polling
let timer = null;
async function tick() { await fetchSensors(); }

function start() {
  if (timer) clearInterval(timer);
  tick();
  timer = setInterval(tick, INTERVAL);
}

el.btnRefresh.addEventListener('click', () => tick());
el.chkSim.addEventListener('change', (e) => { sim = e.target.checked; addLog('Simulação: ' + sim); });

start();
