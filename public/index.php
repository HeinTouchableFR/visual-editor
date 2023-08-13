<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <link rel="icon" type="image/svg+xml" href="/src/favicon.svg"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Vite App</title>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&display=swap" rel="stylesheet">
    <script type="module">
        import RefreshRuntime from "http://localhost:5173/@react-refresh"
        RefreshRuntime.injectIntoGlobalHook(window)
        window.$RefreshReg$ = () => {}
        window.$RefreshSig$ = () => (type) => type
        window.__vite_plugin_react_preamble_installed__ = true
    </script>
    <style>
        html,
        body {
            font-family: DM Sans, sans-serif;
            font-size: 16px;
        }

        [role=button],
        button {
            cursor: pointer
        }

        *, *::before, *::after {
            box-sizing: border-box;
        }

        p {
            margin: 0;
            padding: 0;
        }

        .button {
            font: inherit;
            padding: .5em 1em;
            border-radius: 3px;
            border: none;
            background-color: rgb(99, 102, 241);
            color: #FFF;
        }

        .hero {
            max-width: 800px;
            margin: 40px auto;
            text-align: center;
        }

        :root {
            --font: "Rubik";
            --step--2: clamp(0.61rem,calc(0.6rem + 0.05vw),0.64rem);
            --step--1: clamp(0.73rem,calc(0.71rem + 0.11vw),0.80rem);
            --step-0: clamp(0.88rem,calc(0.84rem + 0.19vw),1.00rem);
            --step-1: clamp(1.05rem,calc(0.99rem + 0.31vw),1.25rem);
            --step-2: clamp(1.26rem,calc(1.17rem + 0.47vw),1.56rem);
            --step-3: clamp(1.51rem,calc(1.37rem + 0.69vw),1.95rem);
            --step-4: clamp(1.81rem,calc(1.62rem + 0.97vw),2.44rem);
            --step-5: clamp(2.18rem,calc(1.91rem + 1.36vw),3.05rem);
            --container-padding: 20px;
            --container-width: 1350px;
            --gap: 20px;
            --space: 8px;
            --contrast: #274754;
            --contrast-h: 197;
            --contrast-s: 37%;
            --contrast-l: 24%;
            --color-dark: #3c2b2a;
            --color-dark-h: 4;
            --color-dark-s: 17%;
            --color-dark-l: 20%;
            --color: #b2a4a3;
            --color-h: 4;
            --color-s: 9%;
            --color-l: 67%;
            --color-light: #f3edec;
            --color-light-h: 4;
            --color-light-s: 21%;
            --color-light-l: 94%;
            --accent: #004a99;
            --accent-h: 211;
            --accent-s: 100%;
            --accent-l: 30%;
            --accent-2: #00ffe5;
            --accent-2-h: 174;
            --accent-2-s: 100%;
            --accent-2-l: 50%;
            --red: #f25353;
            --green: #41cf7c;
            --yellow: #feb32b;
            --white: #fff;
            --color-1: #023e8a;
            --color-2: #e85d04;
            --color-3: #6a994e;
            --color-4: #d00000;
            --color-5: #ffb703;
            --color-6: #8338ec;
            --skeleton: var(--color-light);
            --border: var(--color);
            --background: var(--color-light);
            --background-light: #fff;
            --shadow: #d8e1e8;
        }
    </style>
</head>
<body>
<div id="app"></div>
<div class='hero'>
    <h1>
        This is a sample page to test the editor
    </h1>
</div>
<div class='flex'>
    <div id='editor'></div>
</div>
<form action="" method="get">
    <editor-builder
            name="content"
            preview="http://localhost:8000/server/index.php"
            iconsUrl="/[name].svg"
            id="editor1"
            value=""
    ></editor-builder>
</form>
<script type="module" src="http://localhost:5173/src/demo.tsx"></script>
<script>
    const editor1 = document.getElementById('editor1')
    editor1.setAttribute('value', localStorage.getItem('editor1value') || JSON.stringify([
        {
            title: "Album example",
            titleAlign: "left",
            content: "<p>Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>",
            buttons: [
                {
                    "label": "Main call to action",
                    "url": "#",
                    "type": "primary"
                },
                {
                    "label": "Secondary action",
                    "url": "#",
                    "type": "secondary"
                }
            ],
            _name: "hero"
        }
    ]))
</script>
</body>
</html>