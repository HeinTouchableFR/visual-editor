import {VisualEditor} from "src/VisualEditor";

let editor = new VisualEditor()

editor.toFrench()

editor.registerComponent("hero", {
    title: "Hero",
    fields: [],
});

editor.registerTemplate({
    name: "Template de test",
    image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.fotolip.com%2Fwp-content%2Fuploads%2F2016%2F05%2FWebsite-Templates-8.jpg&f=1&nofb=1",
    description: "Template multicolonne",
    data: [
        {
            title: "Album 1 example",
            titleAlign: "left",
            content:
                "<p>Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>",
            buttons: [
                {
                    label: "Main call to action",
                    url: "#",
                    type: "primary",
                },
                {
                    label: "Secondary action",
                    url: "#",
                    type: "secondary",
                },
            ],
            _name: "hero",
        },
        {
            title: "Album 2 example",
            titleAlign: "left",
            content:
                "<p>Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>",
            buttons: [
                {
                    label: "Main call to action",
                    url: "#",
                    type: "primary",
                },
                {
                    label: "Secondary action",
                    url: "#",
                    type: "secondary",
                },
            ],
            _name: "hero",
        },
        {
            title: "Album 3 example",
            titleAlign: "left",
            content:
                "<p>Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>",
            buttons: [
                {
                    label: "Main call to action",
                    url: "#",
                    type: "primary",
                },
                {
                    label: "Secondary action",
                    url: "#",
                    type: "secondary",
                },
            ],
            _name: "hero",
        },
        {
            title: "Album 3 example",
            titleAlign: "left",
            content:
                "<p>Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>",
            buttons: [
                {
                    label: "Main call to action",
                    url: "#",
                    type: "primary",
                },
                {
                    label: "Secondary action",
                    url: "#",
                    type: "secondary",
                },
            ],
            _name: "hero",
        },
    ],
});

editor.defineElement()