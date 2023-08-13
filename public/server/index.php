<?php
require_once 'helpers.php';
$body = file_get_contents('php://input');
$data = json_decode($body, true);
if ($data['preview'] ?? null) {
    renderBlock($data);
    exit();
}
?><!DOCTYPE html>
<html lang="en">
<head>
    <script type="module" src="/@vite/client"></script>
    <script type="module">
        import RefreshRuntime from "/@react-refresh"
        RefreshRuntime.injectIntoGlobalHook(window)
        window.$RefreshReg$ = () => {}
        window.$RefreshSig$ = () => (type) => type
        window.__vite_plugin_react_preamble_installed__ = true
    </script>
    <meta charset="UTF-8"/>
    <link rel="icon" type="image/svg+xml" href="/src/favicon.svg"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link rel="stylesheet" href="/style.css">
    <link rel="stylesheet" href="/style-ui.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <style>
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
        .text-right {
            text-align: right;
        }
        .bloc {
            background-image: var(--background);
            background-color: var(--backgroundColor);
            background-position:  var(--backgroundXPosition, center) var(--backgroundYPosition, center);
            background-repeat: var(--backgroundRepeat, no-repeat);
            background-size: var(--backgroundSize, cover);
            color: var(--textColor, currentColor);
        }

        @media only screen and (max-width: 760) {
            .bloc {
                background-image: var(--backgroundMobile);
            }
        }
    </style>
</head>
<body>

<header>
    <div class="collapse bg-dark" id="navbarHeader">
        <div class="container">
            <div class="row">
                <div class="col-sm-8 col-md-7 py-4">
                    <h4 class="text-white">About</h4>
                    <p class="text-muted">Add some information about the album below, the author, or any other background context. Make it a few sentences long so folks can pick up some informative tidbits. Then, link them off to some social networking sites or contact information.</p>
                </div>
                <div class="col-sm-4 offset-md-1 py-4">
                    <h4 class="text-white">Contact</h4>
                    <ul class="list-unstyled">
                        <li><a href="#" class="text-white">Follow on Twitter</a></li>
                        <li><a href="#" class="text-white">Like on Facebook</a></li>
                        <li><a href="#" class="text-white">Email me</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="navbar navbar-dark bg-dark shadow-sm">
        <div class="container">
            <a href="#" class="navbar-brand d-flex align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true" class="me-2" viewBox="0 0 24 24"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
                <strong>Mon site</strong>
            </a>
        </div>
    </div>
</header>

<main role="main" id="ve-components">
    <?php
    array_map('renderBlock', (array)$data)
    ?>
</main>
</body>
</html>