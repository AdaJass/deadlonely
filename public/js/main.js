var player;

function resetPlayer() {
    player = {
        has_rock: false
    };
}



var tree = [
{

 title:"一媒互动",
 sub_title:"丧尸的浪漫--你能帮助Fred找到Barbara吗？（恐怖,血腥,浪漫,爱情）",
 choices:[
 {
 	label:"Play",
 	next:{
 		id:"start",
        video:"piantou",
        before: resetPlayer,
        choices:[
        {
             label:"走左边",
             next:{
             	video:"zuoyi",
             	next:{
             		choices:[
             		{
             			label:"巧克力",
             			next:{
             				video:"zuoer",
             				next:{
             					title:"Oh，so bad！再来一次吧！",
             					choices:[
             					{
             						label:"try,again??",
             						next:{
             							video:"zuoyi"
             						}
             					}
             				  ]
             				}
             			}
             		},
             		{
             			label:"玫瑰花",
             			next:{
             				video:"1-2",
             				next:{
             					choices:[
             					{
                                  label:"往下走",
                                  next:{
                                  	video:"1-2-1",
                                  	next:{
                                  		title:"Oh，so bad！再来一次吧！",
                                  		choices:[
                                  		{
                                            label:"try,again!!",
                                            next:{
                                            	video:"zuoyi"
                                            }
                                  		}
                                  		]
                                  	}
                                  }
             					},
             					{
             						label:"往上走",
             						next:{
             							video:"1-2-2",
             							next:{
             								title:"谢谢，你带领Fred找到他的真爱。",
             								choices:[
             								{
                                                label:"try,again!",
                                                next:{
                                                	video:"piantou"
                                                }
             								}
             								]
             							}
             						}
             					}
             					]
             				}
             			}
             		}
             		]
             	}
             }
        },
        {
        	label:"走右边",
        	next:{
        		video:"02",
        		next:{
        			choices:[
        			{
                      label:"返回去",
                      next:{
                      	video:"2-1",
                      	 next:{
                      	 	choices:[
                      	 	{
                      	 		label:"走左边-香水",
                      	 		next:{
                      	 			video:"2-1-1",
                      	 			next:{
                      	 				title:"谢谢，你带领Fred找到他的真爱。",
                      	 				choices:[
                      	 				{
                      	 					label:"try,again!!",
                      	 					next:{
                      	 						video:"piantou"
                      	 					}
                      	 				}]
                      	 			}
                      	 		}
                      	 	},
                      	 	{
                      	 		label:"走右边--衣服",
                      	 		next:{
                      	 			video:"yifu",
                      	 			next:{
                      	 				title:"Oh，so bad！再来一次吧！",
                      	 				choices:[
                      	 				{
                      	 					label:"try,again!!",
                      	 					next:{
                      	 						video:"2-1"
                      	 					}
                      	 				}
                      	 				]
                      	 			}
                      	 		}
                      	 	}
                      	 	]
                      	 }
                      }
        			},
        			{
        				label:"海报",
        				next:{
        					video:"2-2",
        					next:{
        						title:"Oh，so bad！再来一次吧！",
        						choices:[
        						{
        							label:"try,again!!",
                                     next:{
                                     	video:"02"
                                     }
        						}]
        					}
        				}
        			}
        			]
        		}
        	}
        }

       ]
 	}
 }
 ]

}];

vce.init(tree, {el: "#container", 
video_url: "./videos/"});
