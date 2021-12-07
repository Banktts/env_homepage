const settings = {
    "name": "env-homepage",
    "state": {
        "frontity": {
            "url": "https://test.frontity.org",
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
                                "/people/faculty-members"
                            ],
                                [
                                    "Laboratory Staffs",
                                    "/people/laboratory_staffs/"
                                ],
                                [
                                    "Administrative Staffs",
                                    "/people/administrative_staffs/"
                                ]
                            ]
                        ],
                        [
                            "Travel",
                            "/category/travel/"
                        ],
                        [
                            "Japan",
                            "/tag/japan/"
                        ],
                        [
                            "About Us",
                            "/about-us/"
                        ]
                    ],
                    "featured": {
                        "showOnList": false,
                        "showOnPost": false
                    }
                },

            },

        },
        {
            "name": "@frontity/wp-source",
            "state": {
                "source": {
                    "url": "https://envtest81267821.wordpress.com"
                }
            }
        },
        "@frontity/tiny-router",
        "@frontity/html2react"
    ]
};

export default settings;
