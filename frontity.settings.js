import { config } from "dotenv";

config();

const settings = {
    "name": "env-homepage",
    "state": {
        "Environmental Engineering": {
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
                        ["TABEE","/tabee"],

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
                        ], [
                            "Academics", [
                                [
                                    "Bachelor degree",
                                    "/bachelor_degree"
                                ], [
                                    "Master degree",
                                    "/master_degree"
                                ], [
                                    "Doctorate degree",
                                    "/doctorate_degree"
                                ], [
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
                            "/about_us/"
                        ]
                    ],
                    "postCategories": {
                        "people": {
                            "facultyMembers": 3,
                            "adminStaffs": 5,
                            "labStaffs":6
                        }

                    }
                    ,
                    "breakPoint": {
                        "isDesktop": {
                            "minWidth": 1024
                        },
                        "isTablet": {
                            "minWidth": 769,
                            "maxWidth": 1023
                        },
                        "isMobile": {
                            "maxWidth": 768
                        }
                    }
                },

            },

        },
        {
            "name": "@frontity/wp-source",
            "state": {
                "source": {
                    "url": "http://192.168.0.244:8000"
                }
            }
        },
        "@frontity/tiny-router",
        "@frontity/html2react"
    ]
};

export default settings;
