/* Russian (default) is stored in the HTML.
   This script adds English as a secondary language and lets the
   visitor switch between the two via RU / EN buttons.
   Product links in the EN version are placeholders - replace them yourself. */

(function () {
    var STORAGE_KEY = "dllhostexe_lang";

    var EN = {
        "nav-home": "🏠 Home",
        "nav-devices": "💻 Devices",

        "index-h1": "Welcome to the DLLHostExe website",
        "index-h2": "Information",
        "contact-summary": "Contacts",
        "contacts-block":
            `<p><strong>Telegram:</strong> <a href="https://t.me/dllhostexe" target="_blank">@dllhostexe</a> | <a href="https://t.me/justanotherindianacc" target="_blank">@justanotherindianacc</a></p><p><strong>Discord:</strong> <span>dllhost.exe</span></p>`,
        "interests-h2": "Interests:",
        "interests-summary-open": "Show interests",
        "interests-summary-close": "Hide interests",
        "ru-interests-summary-open": "Показать интересы",
        "ru-interests-summary-close": "Скрыть интересы",
        "interests":
            `<p>Deltarune</p>
<p>Minecraft</p>
<p>(Vibe)coding</p>
<p>Unstable SMP</p>
<p>Computers and retro stuff</p>`,

        "devices-h1": "🛠️ My devices",

        "c1":
            `<h3>🖥️ Main PC</h3>
<p>My main PC, used on a permanent basis.</p>
<p><strong>OS:</strong> Windows 10 21H2 Enterprise IoT LTSC (MAS), Windows 7(MAS+ESU), CachyOS (Arch based)</p>
<p><strong>CPU:</strong> <a href="https://www.amazon.com/AMD-Ryzen-Processor-3-7Ghz-Threads/dp/B08MWMGRH7" target="_blank" rel="noopener noreferrer">AMD Ryzen 5 PRO 4650G</a></p>
<p><strong>GPU:</strong> <a href="https://www.amazon.com/Gigabyte-GeForce-WINDFORCE-Graphics-GV-N3060WF2OC-12GD/dp/B0BNP2CMXM?th=1" target="_blank" rel="noopener noreferrer">NVIDIA Geforce RTX 3060</a></p>
<p><strong>RAM:</strong> Crucial Ballistix White 16 GB</p>
<p><strong>Motherboard:</strong> <a href="https://www.amazon.com/-/en/GIGABYTE-B550M-AORUS-Elite-Motherboard/dp/B08BN8VD23?th=1" target="_blank" rel="noopener noreferrer">Gigabyte B550M AORUS Elite</a></p>
<p><strong>PSU:</strong> Cougar STE 500W</p>
<p><strong>Drives:</strong></p>
<ul style="padding-left: 35px; margin: 8px 0;">
    <li><a href="https://www.amazon.com/Western-Digital-WDS240G2G0B-Internal-Green/dp/B078WYS5K6?th=1" target="_blank" rel="noopener noreferrer">WD Green SATA M.2 SSD 240GB</a></li>
    <li><a href="https://www.amazon.com/dp/B0088PUEPK?ref=clp_hp_h_pc&th=1" target="_blank" rel="noopener noreferrer">WD Blue HDD 1TB</a></li>
    <li>Apacer AS350 1TB</li>
</ul>
<p><strong>Peripherals:</strong></p>
<ul style="padding-left: 35px; margin: 8px 0;">
    <li>Keyboard: <a href="https://www.amazon.com/-/es/Bloody-B500N/dp/B08W5BMX8S/" target="_blank" rel="noopener noreferrer">Bloody 500N</a></li>
    <li>Mouse: <a href="https://www.newegg.com/p/32K-0012-00010" target="_blank" rel="noopener noreferrer">A4Tech X-710BK</a></li>
    <li>Headphones: <a href="https://www.amazon.com/Redragon-Zeus-X-Wired-Gaming-Headset/dp/B099WVL28K?th=1" target="_blank" rel="noopener noreferrer">Redragon ZEUS X Black</a></li>
    <li>Controller: <a href="https://www.amazon.com/Controller-Gamepad-Microsoft-Windows-Dual-Vibration/dp/B07ZGD53JF?th=1" target="_blank" rel="noopener noreferrer">Xbox 360 Wired Controller</a></li>
    <li>Webcam: <a href="https://www.amazon.com/Canyon-Full-Live-Streaming-Webcam/dp/B07N11XQFY" target="_blank" rel="noopener noreferrer">Canyon CNS-CWC5</a></li>
</ul>`,

        "c2":
            `<h3>📱 Google Pixel 7</h3>
<p>Main phone right now.</p>
<p><strong>Model:</strong> <a href="https://www.amazon.com/Google-Pixel-128GB-8GB-Obsidian/dp/B0BL8HPF13?th=1" target="_blank" rel="noopener noreferrer">Google Pixel 7</a></p>
<p><strong>OS:</strong> Android 16</p>
<p><strong>RAM:</strong> 8 GB</p>
<p><strong>Storage:</strong> 128 GB</p>
<p><strong>Color:</strong> Black (Obsidian)</p>
<p><strong>Root:</strong> None</p>`,

        "c3":
            `<h3>💻 Lenovo Laptop</h3>
<p>Old laptop with a broken display casing.</p>
<p><strong>Model:</strong> <a href="https://icecat.biz/en/p/lenovo/80mj00cgix/ideapad-laptops-0889955085245-100-15iby-30590052.html" target="_blank" rel="noopener noreferrer">Lenovo Ideapad 100-15IBY</a></p>
<p><strong>CPU:</strong> Intel Celeron N2840</p>
<p><strong>RAM:</strong> 4 GB</p>
<p><strong>Storage:</strong> HDD 500 GB</p>
<p><strong>OS:</strong> Windows 7 Professional (MAS)</p>`,

        "c5":
            `<h3>📱 Xiaomi POCO C65</h3>
<p>Secondary phone.</p>
<p><strong>Model:</strong> <a href="https://www.notebookcheck.net/Xiaomi-Poco-C65.776322.0.html" target="_blank" rel="noopener noreferrer">2310FPCA4G Gale</a></p>
<p><strong>OS:</strong> crDroid 12.10</p>
<p><strong>Android:</strong> 16</p>
<p><strong>RAM:</strong> 12 GB (8 GB physical + 4 GB swap)</p>
<p><strong>Storage:</strong> 256 GB</p>
<p><strong>Color:</strong> Blue</p>
<p><strong>Root:</strong> Yes</p>`,

        "c7":
            `<h3>📱 Xiaomi Redmi 9</h3>
<p>Broken screen, but touch and display work fully. The flash storage leaves a lot to be desired.</p>            
<p><strong>Model:</strong> <a href="https://www.notebookcheck.net/Xiaomi-Redmi-9.478173.0.html" target="_blank" rel="noopener noreferrer">Lancelot M2004J19G</a></p>
<p><strong>OS:</strong> MIUI 12.0.4</p>
<p><strong>Android:</strong> 10</p>
<p><strong>RAM:</strong> 3 GB</p>
<p><strong>Storage:</strong> 32 GB</p>
<p><strong>Color:</strong> Purple</p>
<p><strong>Root:</strong> No</p>`,

        "c4":
            `<h3>💻 Acer Aspire Lite 15</h3>
<p>Good laptop for everyday tasks.</p>
<p><strong>Model:</strong> AL15-42P-R41D</p>
<p><strong>CPU:</strong> AMD Ryzen 5 7430U</p>
<p><strong>RAM:</strong> 16 GB</p>
<p><strong>Storage:</strong> SSD 512 GB</p>
<p><strong>OS:</strong> Windows 10 21H2 Enterprise IoT LTSC (MAS)</p>`,

        "c6":
            `<h3>📱 Huawei Y9 2018</h3>
<p>Third phone. Used as a phone with timekiller games.</p>
<p><strong>Model:</strong> <a href="https://www.gadgetbytenepal.com/huawei-y9-2018-review/" target="_blank" rel="noopener noreferrer">FLA-LX1</a></p>
<p><strong>OS:</strong> EMUI 9.1.0</p>
<p><strong>Android:</strong> 9</p>
<p><strong>RAM:</strong> 3 GB</p>
<p><strong>Storage:</strong> 32 GB</p>
<p><strong>Color:</strong> Dark blue</p>
<p><strong>Root:</strong> No</p>`,

        "footer": "Copyleft (c) 2006 DLLHostExe. All rights revoked."
    };

    document.addEventListener("DOMContentLoaded", function () {
        var cache = {};
        var items = document.querySelectorAll("[data-i18n]");
        for (var i = 0; i < items.length; i++) {
            cache[items[i].getAttribute("data-i18n")] = items[i].innerHTML;
        }

        function render(lang) {
            document.documentElement.setAttribute("lang", lang);
            var list = document.querySelectorAll("[data-i18n]");
            for (var j = 0; j < list.length; j++) {
                var key = list[j].getAttribute("data-i18n");
                if (key === "interests-summary-open" || key === "interests-summary-close") continue;
                list[j].innerHTML = (lang === "en" && EN[key]) ? EN[key] : cache[key];
            }
            var ruBtn = document.getElementById("lang-ru");
            var enBtn = document.getElementById("lang-en");
            if (ruBtn) ruBtn.classList.toggle("active", lang === "ru");
            if (enBtn) enBtn.classList.toggle("active", lang === "en");
            updateInterestsSummary(lang);
            try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
            /* Re-render emoji to Twemoji images after text swap */
            if (typeof twemoji !== "undefined") {
                try { twemoji.parse(document.body); } catch (e) {}
            }
        }

        function updateInterestsSummary(lang) {
            var details = document.getElementById("interests-details");
            var summary = document.querySelector('#interests-details[open] summary, #interests-details summary');
            if (!details || !summary) return;
            var open = details.hasAttribute("open");
            if (lang === "en") {
                summary.innerHTML = open ? EN["interests-summary-close"] : EN["interests-summary-open"];
            } else {
                summary.innerHTML = open ? EN["ru-interests-summary-close"] : EN["ru-interests-summary-open"];
            }
        }

        var saved = null;
        try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) {}
        render(saved === "en" ? "en" : "ru");

        var interests = document.getElementById("interests-details");
        if (interests) {
            interests.addEventListener("toggle", function () {
                var lang = (document.documentElement.getAttribute("lang") === "en") ? "en" : "ru";
                updateInterestsSummary(lang);
            });
        }

        var ruBtn = document.getElementById("lang-ru");
        var enBtn = document.getElementById("lang-en");
        if (ruBtn) ruBtn.addEventListener("click", function () { render("ru"); });
        if (enBtn) enBtn.addEventListener("click", function () { render("en"); });
    });
})();