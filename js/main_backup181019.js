$(".searchs .hand").click(function(){
    $(".search_catelist").stop().slideToggle(300);
});

/*stop을 안쓰면 이벤트가 쌓인다.
 일단은 애니메이션을 멈추고 다시 뒤에 있는 애니메이션 실행 
 stop을 쓰면 그 상태에서 멈춰서 가야할 길을 감 

 var homes=[];
//  var home = new Array() ; 위랑 똑같은 뜻 
homes[0]=[];
homes[1]=[];
homes[0][0]="홍길동"
homes[0][1]=29;
homes[0][2]="m";
homes[1][0]="홍길순"
homes[1][1]=30;
homes[1][0]="f";
*/

$(".menu >ul> li").hover(function(){
    $(".menu_modal").stop().fadeOut(0);
    $(this).children(".menu_modal").stop().fadeIn(100);
},function(){
    $(".menu_modal").stop().fadeOut(0);
});
// this는 li
/*
만들어야하는게
<ul>
    <li><img src="../images/main/site1.jpg"></img></li>
    <li>date dkdkdk</li>
</ul>
 ul이 10개 첫번째 li는 계속 반복*/


/*
 function modalMake0() {
	var html = '';
    var sites = [];
	for(var i=0; i<10; i++) {
		sites[i] = [];
		sites[i][2] = 'https://naver.com';
		sites[i][0] = '<li><img src="../images/main/site'+i+'.jpg" class="img" onclick="goUrl(\''+sites[i][2]+'\');"></li>';
	}
	sites[0][1] = '<li>Demo Default</li>';
	sites[1][1] = '<li>Demo Decor</li>';
	sites[2][1] = '<li>Demo Retail</li>';
	sites[3][1] = '<li>Demo Books</li>';
	sites[4][1] = '<li>Demo Fashion Color</li>';
	sites[5][1] = '<li>Demo Lingerie</li>';
	sites[6][1] = '<li>Demo Handmade</li>';
	sites[7][1] = '<li>Demo Fashion</li>';
	sites[8][1] = '<li>Demo Fashion Flat</li>';
	sites[9][1] = '<li>Demo Electronics</li>';

	for(i=0; i<sites.length; i++) {
		html = '<ul>'+sites[i][0]+sites[i][1]+'</ul>';
		$("#modal0").append(html);
	}
}
modalMake0();

function goUrl(url) {
	location.href = url;
}
*/
// console.log(JSON.stringify(sites));
/**카테고리0 */
$.ajax({
    url:"../json/cate0.json",
    type:"get",
    dataType:"json",
    data:{},
    success:function(data){
        var cmt=data.result.length;
        // var style ='style="width:'+(100/cmt + '%')+';"';
        var himg;
        for(var i=0; i<cmt; i++){
            himg ='<ul>';
            himg += '<li>';
            himg += '<a href="'+data.result[i].img.link +'">';
            himg += '<img src="'+ data.result[i].img.src+'"' + 'class="img"/>';
            himg += '</a>';
            himg += '</li>';
            himg += '<li>';
            himg += data.result[i].img.title;;
            himg +='</li>';
            himg += '</ul>';
            $("#modal0").append(himg);
        }
    },
    error:function(xhr,status,error){
        console.log(xht,status,error)
    }
});
/*다른방법 
success : function(data){
    var html;
    for (var i=0; i<data.result.length; i++){
        var html = '<ul>'
        html += '<li><img src="'+data.result[i].img+'" class ="img" onclick="goUrl(/''+ data.result[i].link+'/');">' +data.result[i].title + '</li>';
        $("#modal0").append(html);
    }
}
*/

/**카테고리1 **/

$.ajax({
    url:"../json/cate1.json",
    type:"get",
    dataType:"json",
    data:{},
    success:function(data){
        var cnt=data.result.length;
        var style='style= "width:'+(100/cnt+ '%')+';"';
        var html;
        for(var i=0; i<cnt; i++){
            // console.log(data.result[i].main.title);
             html ='<ul '+ style +'>';
             html +='<li class="title">';
             html+= '<a href="'+data.result[i].main.link+'">';
             html +=data.result[i].main.title;

             html +='</a>';
             html += '<div class="tooltip" style="background:'+ data.result[i].main.color+'">';
             html += data.result[i].main.icon;
             html += '<div style="background:'+ data.result[i].main.color+'"></div>';
             html += '</div>';
             html+='</li>';
            for(var j=0; j<data.result[i].sub.length; j++){
                // console.log(data.result[i].sub[j].title);}
                html +='<li class="cont"><a href="'+data.result[i].sub[j].link+'">';
                html +=data.result[i].sub[j].title;
                html += '</a>';
                html += '<div class="tooltip" style="background:'+ data.result[i].sub[j].color+'">';
                html += data.result[i].sub[j].icon;
                html += '<div style="background:'+ data.result[i].sub[j].color+'"></div>';
                html += ' </div>';
                html +='</li>';
            }
            html +='</ul>';
            $("#modal1").append(html);
        }
       
    },
    error:function(xhr,status,error){
        console.log(xhr, status, error);
    }
});

/**카테고리2**/
$.ajax({
 url:"../json/cate2.json",
 type :"get",
 dataType:"json",
 data:{},
 success:function(data){
     var html ='';
     var blogs=data.result.blog;
     var posts=data.result.recent;
     //blog 생성
     for (var i=0; i<blogs.length; i++){
         html = '<ul>';
         html +='<li class="title"><a href="'+ blogs[i].main.link+'">'+ blogs[i].main.title+'</a>'
         if(blogs[i].main.icon != ""){
         html += '<div class="tooltip" style="background:'+ blogs[i].main.color+'">';
         html += blogs[i].main.icon;
         html += '<div style="background:'+ blogs[i].main.color+'"></div>';
         html += '</div>';
         }
         html+='</li>';
         for(var j=0; j<blogs[i].sub.length; j++){
         html += '<li class="title"><a href="'+ blogs[i].sub[j].link+'">'+ blogs[i].sub[j].title+'</a>'
         if(blogs[i].sub[j].icon != ""){
         html += '<div class="tooltip" style="background:'+ blogs[i].sub[j].color+'">';
         html += blogs[i].sub[j].icon;
         html += '<div style="background:'+ blogs[i].sub[j].color+'"></div>';
         html += '</div>';
         }
         html+='</li>';
         }
         html+= '</ul>';
         $("#modal2 > .blogs").append(html);
     }
     //recents 생성
     for(var i=0; i<posts.length; i++){
        html = '<ul>';
        html+= '<li class="post clear" onclink="goPost(\''+posts[i].link + '\');">';

        html += '<img src="'+posts[i].img+'" class="img post_img hvoer">';
        html += '<div>';
        html += '<div class="post_title">'+ posts[i].title+'</div>';
        html += '<span class="post_date">'+posts[i].date+'</span>';
        html += '<span class="post_cnt">'+ posts[i].comment+'</span>';
        html += '<span class="post_comment">Comment</span>';
        html += '</div>';
        html += '</li>';
        html+= '</ul>';
        $("#modal2 > .recents").append(html);
     }
 },
 error:function(xhr,status,error){
     alert("통신이 원활하지 않습니다.\n잠시후 다시 시도해주세요.");
     console.log(xhr,status,error);
 }
});
/*
<d class="blogs">
                <ul>
                  <li class="title"><a href="#">BLOG TYPES</a></li>
                  <li class="sub"><a href="#">Alternatives</a></li>
                </ul>
                <ul>
                  <li class="title"><a href="#">BLOG TYPES</a></li>
                  <li class="sub"><a href="#">Alternatives</a></li>
                </ul>
              </d iv>
              <div class="recents">
                <div class="title">RECENTS POSTS</div>
                <ul>
                  <li class="post clear" onclink="goPost(0);">

                    <img src="../images/main/blog-11-75x65.jpg" class="img post_img">
                    <div>
                      <div class="post_title">A companion for extras spleeping</div>
                      <span class="post_date">July23, 2016</span>
                      <span class="post_cnt">1</span>
                      <span class="post_comment">Comment</span>
                    </div>
                  </li>
                </ul>
              </div>

*/
/**카테고리3 */

$.ajax({
    url:"../json/cate3.json",
    type:"get",
    dataType:"json",
    data:{},
    success:function(data){
        var mains=data.result.length;
        var html;
        for(var i=0; i<mains; i++){
            // console.log(data.result[i].main.title);
             html ='<ul>';
             html +='<li class="title">';
             html+= '<a href="'+data.result[i].main.link+'">';
             html +=data.result[i].main.title;
             html +='</a>';
             if(data.result[i].main.icon != ""){
             html += '<div class="tooltip" style="background:'+ data.result[i].main.color+'">';
             html += data.result[i].main.icon;
             html += '<div style="background:'+ data.result[i].main.color+'"></div>';
             html += '</div>';}
             html+='</li>';
            for(var j=0; j<data.result[i].sub.length; j++){
                // console.log(data.result[i].sub[j].title);}
                html +='<li class="cont"><a href="'+data.result[i].sub[j].link+'">';
                html +=data.result[i].sub[j].title;
                html += '</a>';
                html +='</li>';
            }
            html +='</ul>';
            $("#modal3").append(html);
        }
       
    },
    error:function(xhr,status,error){
        console.log(xhr, status, error);
    }
});

/** 카테고리4**/
$.ajax({
    url:"../json/cate4.json",
    type:"get",
    dataType:"json",
    data:{},
    success:function(data){
        var mains=data.result.length;
        var html;
        for(var i=0; i<mains; i++){
            // console.log(data.result[i].main.title);
             html ='<ul>';
             html +='<li class="title">';
             html+= '<a href="'+data.result[i].main.link+'">';
             html +=data.result[i].main.title;
             html +='</a>';
             if(data.result[i].main.icon != ""){
             html += '<div class="tooltip" style="background:'+ data.result[i].main.color+'">';
             html += data.result[i].main.icon;
             html += '<div style="background:'+ data.result[i].main.color+'"></div>';
             html += '</div>';}
             html+='</li>';
            for(var j=0; j<data.result[i].sub.length; j++){
                // console.log(data.result[i].sub[j].title);}
                html +='<li class="cont"><a href="'+data.result[i].sub[j].link+'">';
                html +=data.result[i].sub[j].title;
                html += '</a>';
                if(data.result[i].sub[j].icon != ""){
                    html += '<div class="tooltip" style="background:'+ data.result[i].sub[j].color+'">';
                    html += data.result[i].sub[j].icon;
                    html += '<div style="background:'+ data.result[i].sub[j].color+'"></div>';
                    html += '</div>';}
                html +='</li>';
            }
            html +='</ul>';
            $("#modal4").append(html);
        }
       
    },
    error:function(xhr,status,error){
        console.log(xhr, status, error);
    }
});

/*
$.ajax({
    url:"../json/cate2.json",
    type:"get",
    dataType:"json",
    data:{},
    success:function(data){
        var cbt=data.result.length;
        var style='style= "width:'+(100/cbt+ '%')+';"';
        var html;
        for(var i=0; i<data.result.length; i++){
            html= '<ul>'
            html += '<li>'
            html += '<a href="'+ data.result[i].main.link+'">'
            html += data.result[i].main.title;
            html +='</a>'
            html += '</li>'
            for(var j=0; j<data.result[i].sub.length; j++){
                html += '<li>'
                html += '<a href="'+data.result[i].sub[j].link +'">'
                html += data.result[i].sub[j].title;
                html+='</a>'
                html+= '</li>'
            }

        }
    },
    error:function(xhr,status,error){
        console.log(xhr,status,error);
    }
    
});
*/
/*
var cates = [
    { main : { title:"SHOP PAGES", icon:"" ,link: "#"} ,
      sub :[
          {title:"Filters area", icon:"", link:"#"

          },{title:"Hidden sidebar", icon:"HOT", color:"green", link:"#"

          },{title:"No page heading", icon:"", link:"#"

          },{title:"Small categories menu", icon:"", link:"#"

          },{title:"Masonry grid", icon:"", link:"#"

          },{title:"Products list", icon:"", link:"#"

          },{title:"With background", icon:"", link:"#"

          },{title:"Category description", icon:"", link:"#"

          },{title:"Only categories", icon:"", link:"#"

          },{title:"Header overlap", icon:"", link:"#"

          },{title:"Default shop", icon:"", link:"#"

          }
      ],

    },{ main : { title:"Product Hovers",  icon:"EFFECTS" ,color:"orange", link: "#"} ,
    sub :[{title:"Hidden sidebar", icon:"", link:"#"

    },{title:"Summary on hoverr", icon:"", link:"#"

    },{title:"Icons on hover", icon:"", link:"#"

    },{title:"Icons & Add to cart", icon:"", link:"#"

    },
    {title:"Full info on image", icon:"", link:"#"

    },{title:"All info on hover", icon:"", link:"#"

    },{title:"Button on image", icon:"", link:"#"

    },{title:"Standard button", icon:"", link:"#"

    },{title:"Quick shop", icon:"", link:"#"

    },{title:"Categories hover #1", icon:"", link:"#"

    },{title:"Categories hover #2", icon:"", link:"#"

    }],

    },{ main : { title:"Product Pages", icon:"UNLIMITED" , color:"red", link: "#"} ,
sub :[{title:"Default", icon:"", link:"#"
},{title:"Centered", icon:"", link:"#"

},{title:"Sticky description", icon:"", link:"#"

},{title:"With shadow", icon:"", link:"#"

},{title:"With background", icon:"", link:"#"

},{title:"Accordion tabs", icon:"NEW", color:"orange",link:"#"

},{title:"Accordion in content", icon:"", link:"#"

},{title:"Sticky add to cart", icon:"", link:"#"

},{title:"With sidebar", icon:"", link:"#"

},{title:"Extra content #1", icon:"", link:"#"

},{title:"Extra content #2", icon:"", link:"#"

}],

    },{ main : { title:"Product Images", icon:"" ,link: "#"} ,
    sub :[{title:"Thumbnails left", icon:"", link:"#"},
    {title:"Thumbnails bottom", icon:"", link:"#"},
    {title:"Sticky images", icon:"", link:"#"},
    {title:"One column", icon:"", link:"#"},
    {title:"Two columns", icon:"", link:"#"},
    {title:"Combined grid", icon:"", link:"#"},
    {title:"Images full-width", icon:"", link:"#"},
    {title:"Zoom image", icon:"", link:"#"},
    {title:"Images size - small", icon:"", link:"#"},
    {title:"Images size - large", icon:"", link:"#"},
    {title:"Without thumbnails", icon:"", link:"#"},],

    },{ main : { title:"WOOCOMMERCE", icon:"" ,link: "#"} ,
    sub :[{title:"Simple product", icon:"", link:"#"

    },{title:"Variable product", icon:"", link:"#"

    },{title:"External product", icon:"", link:"#"

    },{title:"Grouped product", icon:"", link:"#"

    },{title:"Shopping Cart", icon:"", link:"#"

    },{title:"Checkout", icon:"", link:"#"

    },{title:"My account", icon:"", link:"#"

    },{title:"Wishlist", icon:"", link:"#"

    },{title:"Track order", icon:"", link:"#"

    },{title:"Custom 404 page #1", icon:"", link:"#"

    },{title:"Custom 404 page #2", icon:"", link:"#"

    }],

    },{ main : { title:"FEATURES", icon:"BEST" ,color:"red", link: "#"} ,
    sub :[{title:"360° product viewer", icon:"", link:"#"


    },{title:"With video", icon:"", link:"#"


    },{title:"With instagram", icon:"", link:"#"


    },
    {title:"With countdown timer", icon:"", link:"#"


    },{title:"Product presentation", icon:"", link:"#"


    },{title:"Variations swatches", icon:"", link:"#"


    },
    {title:"Infinit scrolling", icon:"NEW", color:"red",  link:"#"


    },{title:"Load more button", icon:"", link:"#"


    },{title:"Catalog mode", icon:"", link:"#"


    },{title:"Cookies law info", icon:"", link:"#"


    },{title:"Parallax scrolling", icon:"", link:"#"


}],

    }
];

console.log(cates);
console.log(JSON.stringify(cates));

function modalMake1(){
	var html='';
	var wid=100/cates.length + "%";
	for(var i=0; i<cates.length; i++){
	 html = '<ul style="width:'+wid+'">';
	 html += '<li class="title">'
     html += '<a href="'+cates[i].main.link+'">' +cates[i].main.title+ '</a>';
    if(cates[i].main.icon !=""){
     html += '<div class="tooltip" style="background:' + cates[i].main.color +' ">';
     html +=  cates[i].main.icon ;
     html +='<div style="background:' + cates[i].main.color +' "></div>';
     html += '</div>';
    }
     html +=  '</li>'
     
     for(var j=0; j<cates[i].sub.length; j++){
        html += '<li class="cont">'
        html += '<a href="'+cates[i].sub[j].link+'">' +cates[i].sub[j].title+ '</a>';
        if(cates[i].sub[j].icon !=""){
        html += '<div class="tooltip" style="background:'+cates[i].sub[j].color + ' ">' ;
        html += cates[i].sub[j].icon;
        html += '<div style="background:'+cates[i].sub[j].color + ' "></div>';
        html += '</div>';}

        html +=  '</li>';
     }
	 html += '</ul>'
	$("#modal1").append(html);
    }

    $("#modal1 .tooltip").each(function(){
        var n =$(this).prev().html().length;
        $(this).css({"left": n*5+"px"});
    });
}
modalMake1();*/

/**카테고리 2 **/
