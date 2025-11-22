# 🌡️ Estação Inteligente de Monitoramento Ambiental para Escritórios Híbridos  
**Projeto IoT – Futuro do Trabalho | MQTT + ESP32 + Wokwi**

---

## 📌 Visão Geral do Projeto  
Com o crescimento do trabalho híbrido e remoto, a qualidade do ambiente físico tem impacto direto na saúde, conforto e produtividade dos profissionais. Temperatura inadequada, falta de luminosidade ou sensação térmica desconfortável podem reduzir desempenho e aumentar o estresse.

Este projeto cria uma **estação de monitoramento ambiental inteligente**, capaz de:

- Ler **temperatura e umidade** (DHT22)  
- Medir **luminosidade** (LDR)  
- Enviar os dados em **tempo real via MQTT**  
- Acionar LEDs indicando níveis de conforto  
- Exibir todos os dados em um **dashboard web** conectado ao broker MQTT  
- Possibilitar uso remoto, simulação e análise

---

## 🎯 Objetivo  
Criar uma solução IoT que monitore e interprete automaticamente condições ambientais do ambiente de trabalho, enviando dados para a nuvem e apresentando feedback visual imediato.

---

## 🧩 Funcionalidades  
✔ Leitura de sensores (DHT22 + LDR)  
✔ Indicadores de conforto via LEDs  
✔ Conexão Wi-Fi  
✔ Comunicação **MQTT** (publish automático)  
✔ Dashboard web assinado ao tópico em tempo real  
✔ Simulação completa no Wokwi  

---

## 🗂 Arquivos do Projeto  
- **main.py** – Código principal em MicroPython para ESP32  
- **dashboard.html** – Página web com dashboard MQTT  
- **diagram.json** – Circuito no Wokwi  
- **README.md** – Este arquivo  

---

## 🔌 Circuito  
- Sensor DHT22 conectado ao GPIO 4  
- LDR em divisor resistivo no ADC (GPIO 34)  
- LEDs:  
  - Verde → Conforto adequado  
  - Amarelo → Atenção  
  - Vermelho → Desconforto  

Imagem ilustrativa do Wokwi recomendada aqui.

---

## 🌐 Comunicação MQTT  
Broker utilizado: **broker.hivemq.com**  
Tópicos:  

| Função | Tópico |
|-------|--------|
| Publicar temperatura | `iot/ambiente/temperatura` |
| Publicar umidade | `iot/ambiente/umidade` |
| Publicar luminosidade | `iot/ambiente/luminosidade` |
| Publicar estado de conforto | `iot/ambiente/status` |
| Dashboard assina | todos os acima |

---

## 🧪 Link do Wokwi  
👉 **(https://wokwi.com/projects/448282718243912705)**

---

## 🚀 Como Executar no Wokwi  
1. Abra o link acima  
2. Clique em **Start Simulation**  
3. O ESP32 conecta ao Wi-Fi simulado  
4. Os sensores começam a publicar automaticamente  
5. Abra o arquivo *dashboard.html* no navegador  
6. O dashboard exibe os dados MQTT em tempo real  

---

## 💡 Como o Sistema Define Conforto  
- Temperatura ideal: **20–26°C**  
- Umidade ideal: **30–60%**  
- Luminosidade ideal: **acima de 300 lux (aprox.)**  

Se qualquer valor sair da faixa → LED vermelho  
Se valor estiver limítrofe → amarelo  
Se tudo ok → verde  

---

## 🧠 Impacto no Futuro do Trabalho  
Ambientes inadequados prejudicam produtividade, geram estresse e aumentam riscos ergonômicos.  
Esta solução permite:

- Monitoramento contínuo de conforto  
- Ajustes automáticos do ambiente  
- Alertas remotos para gestores  
- Ambientes híbridos mais eficientes  
- Melhor saúde ocupacional  

---

## Equipe Wellflow 1ESPX
- Brenda Thais Ribeiro dos Santos
  **RM: 561258**
- Gustavo Cavalcanti
  **RM: 565601**
- Lucas Santana Silva
  **RM: 566261**

---

## 👨‍💻 Tecnologias Utilizadas  
- ESP32 (MicroPython)  
- MQTT (HiveMQ broker público)  
- HTML + JavaScript  
- Wokwi  
- Bootstrap (opcional no dashboard)  

---

## 📜 Licença  
Uso educacional.  
