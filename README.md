# 📘 **Projeto IoT – Estação Inteligente de Conforto Ambiental para Ambientes de Trabalho**

<p align="center">
  <img src="https://img.shields.io/badge/ESP32-MicroPython-blue"/>
  <img src="https://img.shields.io/badge/MQTT-HiveMQ-ffcc00"/>
  <img src="https://img.shields.io/badge/Wokwi-Simulation-green"/>
  <img src="https://img.shields.io/badge/Status-Completed-brightgreen"/>
</p>

Uma solução IoT moderna criada para o **futuro do trabalho**, monitorando temperatura, umidade e luminosidade em tempo real — enviando dados via **MQTT** e exibindo feedback instantâneo com **LEDs indicadores de conforto térmico**.

---

# 🎯 **1. Problema e Motivação**

Ambientes desconfortáveis afetam diretamente:

- 🧠 Produtividade  
- 😌 Bem-estar e saúde  
- 💡 Ergonomia luminosa  
- 🔋 Eficiência energética  
- 🏡 Conforto no home office  

E podem causar:

- ⚠ Aumento de estresse  
- ⚠ Menor engajamento  
- ⚠ Redução de desempenho  

➡ Portanto, torna-se essencial um sistema de **monitoramento ambiental automático, contínuo e preciso**.

---

# 🚀 **2. Solução Desenvolvida**

A Estação IoT Inteligente oferece:

## ✔ **Sensoriamento**
| Sensor | Função |
|--------|---------|
| 🌡 **DHT22** | Temperatura e Umidade |
| 💡 **LDR (ADC)** | Luminosidade |

## ✔ **Comunicação MQTT**
- **Broker:** `broker.hivemq.com`  
- **Publicação:** `wokwi/sensores`  
- **Assinatura:** `wokwi/comandos`

## ✔ **Atuação Automática**
| LED | Significado |
|-----|-------------|
| 🔵 Azul | Ambiente Frio |
| 🟠 Laranja | Confortável |
| 🔴 Vermelho | Quente |

## ✔ **Simulação**
- ⚙ 100% funcional no **Wokwi**
- 🧠 Programado em **MicroPython**
- 🔌 Baseado em **ESP32 DevKit V1**

---

# 🧩 **3. Arquitetura do Sistema**

## 🖥️ **Sensores**
| Componente | Função |
|------------|--------|
| DHT22 | Temperatura e umidade |
| LDR + resistor | Intensidade luminosa |

## 🔦 **Atuadores**
| Atuador | Função |
|---------|--------|
| LEDs azul/laranja/vermelho | Indicam conforto térmico |

## 🌐 **Conectividade**
- Wi-Fi via **Wokwi-GUEST**
- MQTT via **HiveMQ Cloud**

---

# 🔌 **4. Componentes Utilizados (Wokwi)**

- ✔ ESP32 DevKit V1  
- ✔ Sensor DHT22  
- ✔ LDR + resistor  
- ✔ 3 LEDs (vermelho, laranja e azul)  
- ✔ Jumpers  

---

# 🌐 **5. Comunicação MQTT**

## 📤 Publicação – `wokwi/sensores`

Exemplo:
```json
{
  "temperatura": 28.4,
  "umidade": 52.1,
  "luminosidade": 1790
}
```

## 📥 Assinatura – `wokwi/comandos`
Comandos podem vir de clientes externos e aparecerão no terminal.

**Possíveis expansões:**
- ⚙ Controle remoto dos LEDs  
- ⚙ Modo automático  
- ⚙ Alertas sonoros  

---

# 🧪 **6. Link da Simulação Wokwi**
 
https://wokwi.com/projects/448282718243912705

---

# 🛠 **7. Como Rodar o Projeto**

### ✔ 1 — Abra a simulação  
Clique em **Start Simulation**.

### ✔ 2 — Aguarde a inicialização  
O ESP32 irá automaticamente:
- conectar ao WiFi  
- conectar ao broker MQTT  
- iniciar leitura e envio dos sensores  

### ✔ 3 — Visualize os dados no HiveMQ WebSocket Client  
Acesse:  
👉 https://www.hivemq.com/demos/websocket-client  

- Clique em **Connect**
- Inscreva-se no tópico: `wokwi/sensores`
- Observe os dados ao vivo

---

# 🧾 **8. Código-Fonte (main.py)**

Inclui:
- Conexão WiFi  
- Conexão MQTT  
- Leitura dos sensores  
- Publicação JSON  
- Controle automático dos LEDs  
- Thread para mensagens MQTT  

---

# 🎥 **9. Equipe Wellflow**
Brenda Thais Ribeiro dos Santos
**RM: 561258**
Gustavo Cavalcanti
**RM: 565601**
Lucas Santana Silva
**RM:566261**

---

# 📈 **10. Resultados e Impacto**

A solução proporciona:

- 🔍 Monitoramento ambiental imediato  
- 🧘‍♂️ Ambientes mais saudáveis  
- 🏢 Uso em escritórios, coworkings e escolas  
- 🏡 Excelente para home office  
- 🌍 Possível expansão para automação predial  

---

# 📂 **11. Estrutura do Repositório**

```
📁 projeto-iot-conforto
│── README.md
│── main.py
│── diagram.json
│── imagens/
│   ├─ circuito.png
│── docs/
│   ├─ especificacoes.md
```
