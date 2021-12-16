import Root from "./Root";
import link from "@frontity/html2react/processors/link";
import image from "@frontity/html2react/processors/image";
import iframe from "@frontity/html2react/processors/iframe";
import {post} from "@frontity/wp-source/src/libraries/handlers/index";


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
          
                await actions.source.fetch(`/category/events/`)
                await actions.source.fetch(`/category/faculty-members`)
                
                await actions.source.fetch(`/senior_project_form`)
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
                            isPage: true,
                            type: "post",
                            id: params.id
                        }
                    }
                },
                {
                    pattern: "/post/*",
                    func: ({state, link, params}) => {
                        console.log(params.params)
                        state.source.data[link] = {
                            isPost: true,
                            type: "post",
                            id: params.params
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
