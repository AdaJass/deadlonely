var player;

function resetPlayer() {
    player = {
        has_rock: false
    };
}

var tree = [
    {
        title: "Newbee",
        sub_title: "你能够勇敢的去爱吗？",
        choices: [
            {
                label: "Play",
                next: {
                    id: "start",
                    video: "1-intro",
                    sub_title: "我是谁？",
                    before: resetPlayer,
                    choices: [
                        {
                            label: "不摘",
                            next: {
                                video: "2-a-dont_help",
                                next: {
                                    title: "没那个胆量",
                                    choices: [
                                        {
                                            label: "冬季",
                                            next: {
                                                video : "dongji",
                                                 next: "失败，回去练习再来。"
                                            }
                                        }
                                    ]
                                }
                            }
                        },
                        {
                            label: "摘掉",
                            next: {
                                id: "勇敢爱",
                                sub_title: "这就是爱的力量",
                                video: function() {
                                                if (player.has_rock) {
                                                    return "2-c-help_again";
                                                } else {
                                                    return "2-b-help";
                                                }
                                },
                                choices: [
                                    {
                                        label: "冲出去",
                                        next: {
                                            video: function() {
                                                if (player.has_rock) {
                                                    return "3-f-sock_drawer_no_rock";
                                                } else {
                                                    return "3-a-sock_drawer";
                                                }
                                            },
                                            after: function() {
                                                player.has_rock = true;
                                            },
                                            next: "look"
                                        }
                                    },
                                    {
                                        label: "算了吧",
                                
                                            next: {
                                                title: "你失败了，回去练习过再来",
                                                choices: [
                                                    {
                                                        label: "Try again?",
                                                        next: "start"
                                                    }
                                                ]
                                            }
                                        }
                                    },
                                    
                                ]
                            }
                        }
                    ]
                }
            }
        ]
    },
    {
        id: "win",
        video: "5-end",
        next: {
            title: "You win!",
            choices: [
                {
                    label: "Play again?",
                    next: "start"
                }
            ]
        }
    }
];

vce.init(tree, {el: "#container", video_url: "http://s3-eu-west-1.amazonaws.com/joebain/socks/videos/"});

