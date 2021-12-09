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
                await actions.source.fetch(`/category/faculty-members`)
            }

        }
    }, libraries: {
        source: {
            handlers: [
                {
                    pattern: "/faculty-members",
                    func: ({state, link}) => {
                        state.source.data[link] = {
                            isPeople: true,
                            path: "faculty-members"
                        }
                    }
                },
                {
                    pattern: "/faculty-members/:id",
                    func: ({state, link, params}) => {
                        state.source.data[link] = {
                            isPost: true,
                            id: params.id
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
