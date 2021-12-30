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
        envTheme: {
            theme:{
                autoPrefetch: "all",
            }
        }
    },
    actions: {
        envTheme: {
            beforeSSR: async ({ state, actions }) =>{
          
                await actions.source.fetch(`/category/events/`)
                await actions.source.fetch(`/category/faculty-members`)
                await actions.source.fetch(`/form/internship_form`)
                await actions.source.fetch(`/form/senior_project_form`)
                await actions.source.fetch(`/form/thesis_master_form`)
                await actions.source.fetch(`/form/thesis_doctorate_form`)
                await actions.source.fetch(`/form/thesis_inter_form`)
                await actions.source.fetch(`/labs_form`)
                await actions.source.fetch("/bachelor_degree")

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
                            isPostType: true,
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
                },   {
                    pattern: "/senior_project",
                    func: async({state, link}) => {
                        Object.assign(state.source.data[link], {
                            isPostType: true,
                            isForm: true,
                            endpoint: "/form/senior_project_form"
                        });
                    }
                },{
                    pattern: "/internship",
                    func: async({state, link}) => {
                        Object.assign(state.source.data[link], {
                            isPostType: true,
                            isForm: true,
                            endpoint: "/form/internship_form"
                        });
                    }
                },{
                    pattern: "/labs",
                    func: async({state, link}) => {
                        Object.assign(state.source.data[link], {
                            isPostType: true,
                            isForm: true,
                            endpoint: "/labs_form"
                        });
                    }
                },{
                    pattern: "/thesis",
                    func: async({state, link}) => {
                        Object.assign(state.source.data[link], {
                            isPostType: true,
                            isFormGroup: true,
                            title: "Thesis",
                            endpoint: {
                                master:"/form/thesis_master_form",
                                doctor:"/form/thesis_doctorate_form",
                                inter:"/form/thesis_inter_form"
                            }
                        });
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
