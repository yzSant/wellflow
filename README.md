📘 Projeto IoT – Estação Inteligente de Conforto Ambiental para Ambientes de Trabalho
<p align="center"> <img src="https://img.shields.io/badge/ESP32-MicroPython-blue"/> <img src="https://img.shields.io/badge/MQTT-HiveMQ-ffcc00"/> <img src="https://img.shields.io/badge/Wokwi-Simulation-green"/> <img src="https://img.shields.io/badge/Status-Completed-brightgreen"/> </p>

Uma solução IoT moderna para o futuro do trabalho, monitorando temperatura, umidade e luminosidade, e enviando dados em tempo real via MQTT, com resposta imediata através de LEDs indicadores de conforto térmico.

🎯 1. Problema e Motivação

Ambientes de trabalho — sejam presenciais, híbridos ou remotos — dependem diretamente da qualidade ambiental interna para garantir:

🧠 Alta produtividade

😌 Bem-estar e saúde ocupacional

💡 Boa ergonomia luminosa

🔋 Eficiência energética

🏡 Conforto mesmo no home office

Ambientes desconfortáveis provocam:

⚠ aumento de estresse
⚠ menor engajamento
⚠ redução de desempenho

➡ Surge então a necessidade de monitoramento ambiental automático, com feedback rápido e preciso.

🚀 2. Solução Desenvolvida

A solução é uma Estação IoT Inteligente de Conforto Ambiental que:

✔ Sensoriamento

🌡 DHT22 — Temperatura e Umidade

💡 LDR (ADC) — Luminosidade

✔ Comunicação MQTT

Broker: broker.hivemq.com

Publica dados no tópico:

wokwi/sensores


Recebe comandos no tópico:

wokwi/comandos

✔ Atuação Automática
LED	Significado
🔵 Azul	Ambiente Frio
🟠 Laranja	Confortável
🔴 Vermelho	Quente
✔ Simulação 100% funcional

Rodando direto no Wokwi

Compatível com ESP32 + MicroPython

🧩 3. Arquitetura do Sistema
🖥️ Sensores
Sensor	Função
DHT22	Mede temperatura e umidade
LDR (ADC)	Mede luminosidade
🔦 Atuadores
Atuador	Função
LEDs coloridos	Representam nível de conforto térmico
🌐 Conectividade

WiFi via Wokwi-GUEST

MQTT via HiveMQ Cloud

🔌 4. Componentes Utilizados (Wokwi)

✔ ESP32 DevKit V1
✔ Sensor DHT22
✔ LDR + resistor
✔ 3 LEDs (vermelho, laranja e azul)
✔ Jumpers para conexão

🌐 5. Comunicação MQTT
📤 Publicação – Tópico wokwi/sensores

Exemplo de mensagem enviada:

{
  "temperatura": 28.4,
  "umidade": 52.1,
  "luminosidade": 1790
}

📥 Assinatura – Tópico wokwi/comandos

O ESP32 recebe mensagens externas e exibe no terminal.

Possível expansão:
⚙ controle remoto de LEDs
⚙ modos automáticos
⚙ alertas sonoros

🧪 6. Link da Simulação Wokwi

👉 Cole aqui o link da sua simulação:
https://wokwi.com/projects/SEU-PROJETO

🛠 7. Como Rodar o Projeto
✔ 1 — Abra a simulação no Wokwi

Clique em "Start Simulation".

✔ 2 — Aguarde a inicialização

O ESP32 irá automaticamente:

conectar ao WiFi

conectar ao broker MQTT

iniciar o envio de dados

✔ 3 — Visualize os dados no HiveMQ WebSocket Client

Acesse:
👉 https://www.hivemq.com/demos/websocket-client

Clique em Connect

Inscreva-se no tópico:

wokwi/sensores


Veja as leituras surgirem em tempo real.

🧾 8. Código-Fonte (main.py)

O arquivo inclui:

Conexão WiFi

Conexão MQTT

Leitura de sensores

Publicação em JSON

Lógica dos LEDs

Thread para mensagens MQTT

O código completo está no repositório e segue o padrão solicitado.

🎥 9. Vídeo do Projeto (Pitch – 3 minutos)

O vídeo deve conter:

Apresentação do problema no contexto do futuro do trabalho

Demonstração do circuito no Wokwi

Explicação da comunicação MQTT

Aplicações reais e impacto

Encerramento com visão futura do projeto

Se quiser, posso gerar um roteiro pronto para gravação, com falas e tempo.

📈 10. Resultados e Impacto

A solução entrega:

🔍 Monitoramento ambiental imediato

🧘‍♂️ Ambientes mais saudáveis e confortáveis

🏢 Aplicação em escritórios, coworkings, escolas e home office

🌍 Possibilidade de expansão para automação predial

📂 11. Estrutura do Repositório
📁 projeto-iot-conforto
│── README.md
│── main.py
│── diagram.json
│── imagens/
│   ├─ circuito.png
│── docs/
│   ├─ especificacoes.md
