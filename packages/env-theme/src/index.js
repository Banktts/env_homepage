import Root from "./Root";
import link from "@frontity/html2react/processors/link";
import image from "@frontity/html2react/processors/image";
import iframe from "@frontity/html2react/processors/iframe";


export default {
    name: "env-theme",
    roots: {
        envTheme: Root
    },
    state: {
        envTheme: {}
    },
    actions: {
        envTheme: {
            beforeSSR: async ({ state, actions }) =>{
                await actions.source.fetch(`/category/people/faculty-members`)
            }

        }
    }, libraries: {
        source: {
            handlers: [
                {
                    pattern: "/people/:path",
                    func: ({state, link, params}) => {
                        state.source.data[link] = {
                            isPeople: true,
                            path: params.path
                        }
                    }
                },
                {
                    pattern: "/people/page/:name",
                    func: ({state, link, params}) => {
                        state.source.data[link] = {
                            isPeople: true,
                            name: params.name
                        }
                    }
                }

            ]

        },
        html2react: {
            /**
             * Add a processor to `html2react` so it processes the `<img>` tags
             * and internal link inside the content HTML.
             * You can add your own processors too.
             */
            processors: [image, iframe, link],
        },
    },
};
