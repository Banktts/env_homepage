const settings = {
    "name": "env-homepage",
    "state": {
        "frontity": {
            "url": "http://localhost:8000",
            "title": "Test Frontity Blog",
            "description": "WordPress installation for Frontity development"
        }
    },
    "packages": [
        {
            "name": "env-theme",
            "state": {
                "theme": {
                    "menu": [
                        [
                            "Home",
                            "/"
                        ],
                        [
                            "People",
                            [[
                                "Faculty Members",
                                "/faculty-members"
                            ],
                                [
                                    "Laboratory Staffs",
                                    "/laboratory_staffs"
                                ],
                                [
                                    "Administrative Staffs",
                                    "/administrative_staffs"
                                ]
                            ]
                        ],[
                            "Academics",[
                                [
                                    "Bachelor degree",
                                    "/bachelor_degree"
                                ],[
                                    "Master degree",
                                    "/master_degree"
                                ],[
                                    "Doctorate degree",
                                    "/doctorate_degree"
                                ],[
                                    "Scholarship",
                                    "/scholarship"
                                ]
                            ]
                        ],
                        [
                            "Student",
                            [[
                                "Senior project",
                                "/senior_project"
                            ],
                                [
                                    "Internship",
                                    "/internship"
                                ],
                                [
                                    "Thesis",
                                    "/thesis"
                                ]
                            ]
                        ],
                        [
                            "Labs",
                            "/labs"
                        ],
                        [
                            "About Us",
                            "/about-us/"
                        ]
                    ],
                    "featured": {
                        "showOnList": false,
                        "showOnPost": false
                    },
                    "breakPoint":{
                        "isDesktop":{
                            "minWidth":1024
                        },
                        "isTablet":{
                            "minWidth":769,
                            "maxWidth":1023
                        },
                        "isMobile":{
                            "maxWidth":768
                        }
                    }
                },

            },

        },
        {
            "name": "@frontity/wp-source",
            "state": {
                "source": {
                    "url": "http://localhost:8000"
                }
            }
        },
        "@frontity/tiny-router",
        "@frontity/html2react"
    ]
};

export default settings;
