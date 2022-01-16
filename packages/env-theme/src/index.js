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
        envTheme: {
            theme: {
                autoPrefetch: "all",
            }
        }
    },
    actions: {
        envTheme: {
            beforeSSR: async ({state, actions}) => {

                await actions.source.fetch(`/category/events/`)
                // await actions.source.fetch(`/bachelor_degree`)
                // await actions.source.fetch(`/master_degree`)
                // await actions.source.fetch(`/doctorate_degree`)
                // await actions.source.fetch(`/about_us`)

                await actions.source.fetch(`/category/faculty-members`)
                await actions.source.fetch(`/category/administrative-staffs`)
                await actions.source.fetch(`/category/laboratory-staffs`)

                // await actions.source.fetch(`/form/senior_project_form`)
                // await actions.source.fetch(`/form/internship_form`)
                // await actions.source.fetch(`/form/thesis_master_form`)
                // await actions.source.fetch(`/form/thesis_doctorate_form`)
                // await actions.source.fetch(`/form/thesis_inter_form`)
                //
                // await actions.source.fetch(`/labs_form`)
                //
                // await actions.source.fetch(`/thai_scholarship`)
                // await actions.source.fetch(`/inter_scholarship`)



            }

        }
    }, libraries: {
        source: {
            handlers: [
                {
                    pattern: "/faculty-members",
                    func: async ({route,state, libraries}) => {
                        const response = await libraries.source.api.get({
                            endpoint: "posts",
                            params: {
                                per_page: 100,
                                categories: state.theme.postCategories.people.facultyMembers,
                                _embed: true
                            }
                        });
                        const items = await libraries.source.populate({response, state});
                        const {type, id} = state.source.get("/category/faculty-members");
                        Object.assign(state.source.data[route], {
                            id: id,
                            type: type,
                            isPage: true,
                            isPeople: true,
                            isArchive: true,
                            items: items,
                        });

                    },
                },
                {
                    pattern: "/administrative_staffs",
                    func: async ({route, state, libraries}) => {
                        const response = await libraries.source.api.get({
                            endpoint: "posts",
                            params: {
                                per_page: 100,
                                categories: state.theme.postCategories.people.adminStaffs,
                            }
                        });
                        const items = await libraries.source.populate({response, state});
                        const {type, id} =  state.source.get("/category/administrative-staffs");
                        Object.assign(state.source.data[route], {
                            id: id,
                            type: type,
                            isPage: true,
                            isPeople: true,
                            isArchive: true,
                            items: items,
                        });

                    },
                },
                {
                    pattern: "/laboratory_staffs",
                    func: async ({route, state, libraries}) => {
                        const response = await libraries.source.api.get({
                            endpoint: "posts",
                            params: {
                                per_page: 100,
                                categories: state.theme.postCategories.people.labStaffs,
                            }
                        });
                        const items = await libraries.source.populate({response, state});
                        const {type, id} = state.source.get("/category/laboratory-staffs/");
                        Object.assign(state.source.data[route], {
                            id: id,
                            type: type,
                            isPage: true,
                            isPeople: true,
                            isArchive: true,
                            items: items,
                        });

                    },
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
                }, {
                    pattern: "/senior_project",
                    func: async ({route, params, state, libraries}) => {
                        const response = await libraries.source.api.get({
                            endpoint: "pages",
                            params: {
                                slug: "senior_project_form",
                            }
                        });
                        await libraries.source.populate({response, state});
                        const {type, id} = state.source.get("/form/senior_project_form");
                        Object.assign(state.source.data[route], {
                            id: id,
                            type: type,
                            isForm: true,
                            isArchive: true,
                        });
                    },
                }, {
                    pattern: "/internship",
                    func: async ({route, params, state, libraries}) => {
                        const response = await libraries.source.api.get({
                            endpoint: "pages",
                            params: {
                                slug: "internship_form",
                            }
                        });
                        await libraries.source.populate({response, state});
                        const {type, id} = state.source.get("/form/internship_form");
                        Object.assign(state.source.data[route], {
                            id: id,
                            type: type,
                            isForm: true,
                            isArchive: true,
                        });
                    },

                }, {
                    pattern: "/labs",
                    func: async ({route, params, state, libraries}) => {
                        const response = await libraries.source.api.get({
                            endpoint: "pages",
                            params: {
                                slug: "labs_form",
                            }
                        });
                        await libraries.source.populate({response, state});
                        const {type, id} = state.source.get("/labs_form");
                        Object.assign(state.source.data[route], {
                            id: id,
                            type: type,
                            isForm: true,
                            isArchive: true,
                        });
                    }
                }, {
                    pattern: "/thesis",
                    func: async ({route, params, state, libraries}) => {

                        const responseMaster = await libraries.source.api.get({
                            endpoint: "pages",
                            params: {
                                slug: "thesis_master_form",
                            }
                        });
                        const responseDoctor = await libraries.source.api.get({
                            endpoint: "pages",
                            params: {
                                slug: "thesis_doctorate_form",
                            }
                        });
                        const responseInter = await libraries.source.api.get({
                            endpoint: "pages",
                            params: {
                                slug: "thesis_inter_form",
                            }
                        });
                        Promise.all([libraries.source.populate({response:responseMaster, state:state}),libraries.source.populate({response:responseDoctor, state:state}),libraries.source.populate({response:responseInter, state:state})]).then(
                            ()=>{
                                const master = state.source.get("/form/thesis_master_form");
                                const doctor = state.source.get("/form/thesis_doctorate_form");
                                const inter = state.source.get("/form/thesis_inter_form");
                                Object.assign(state.source.data[route], {
                                    isPostType: true,
                                    isFormGroup: true,
                                    title: "Thesis",
                                    master:master,
                                    doctor:doctor,
                                    inter:inter,
                                });
                            }
                        ).catch(
                            ()=>{
                                console.log(
                                    "Wordpress not respond"
                                )
                            }
                        )
                    }
                },
                {
                    pattern: "/scholarship",
                    func: async ({route, params, state, libraries}) => {

                        const thaiScholarship = await libraries.source.api.get({
                            endpoint: "pages",
                            params: {
                                slug: "thai_scholarship",
                            }
                        });
                        const interScholarship = await libraries.source.api.get({
                            endpoint: "pages",
                            params: {
                                slug: "inter_scholarship",
                            }
                        });
                        Promise.all([libraries.source.populate({response:thaiScholarship, state:state}),libraries.source.populate({response:interScholarship, state:state})]).then(
                            ()=>{
                                const thai = state.source.get("/thai_scholarship");
                                const inter = state.source.get("/inter_scholarship");
                                Object.assign(state.source.data[route], {
                                    isPostType: true,
                                    isScholarshipGroup: true,
                                    thai:thai,
                                    inter:inter,
                                });
                            }
                        ).catch(
                            ()=>{
                                console.log(
                                    "Wordpress not respond"
                                )
                            }
                        )
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
