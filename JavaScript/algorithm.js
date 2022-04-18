// get_from_array_list
let list = [{
        id: 1,
        name: "a",
        child: [{
                id: 2,
                name: "b"
            },
            {
                id: 3,
                name: 'c',
                child: [{
                    id: 4,
                    name: "fefef3"
                }]
            }
        ]
    },
    {
        id: 7,
        name: "f"
    }
]






get_from_array_list = (array, id, name) => {
    let result = '';
    let fuc = (item) => {
        for (let i = 0; i < item.length; i++) {
            if (item[i].id == id) {
                result = item[i][name];
                break;
            }
            if (item[i].child) {
                fuc(item[i].child);
            }
        }
    };
    fuc(array);
    return result;
}

console.log(d)





function getCookie(c_name)
{
if (document.cookie.length>0)
  {
  c_start=document.cookie.indexOf(c_name + "=")
  if (c_start!=-1)
    { 
    c_start=c_start + c_name.length+1 
    c_end=document.cookie.indexOf(";",c_start)
    if (c_end==-1) c_end=document.cookie.length
    return unescape(document.cookie.substring(c_start,c_end))
    } 
  }
return ""
}


function Setcookie (name, value)

{ 

    //设置名称为name,值为value的Cookie
    var expdate = new Date();   //初始化时间
    expdate.setTime(expdate.getTime() + 30 * 60 * 1000);   //时间
    document.cookie = name+"="+value+";expires="+expdate.toGMTString()+";path=/";

   //即document.cookie= name+"="+value+";path=/";   时间可以不要，但路径(path)必须要填写，因为JS的默认路径是当前页，如果不填，此cookie只在当前页面生效！~
}

	let jsontoQuery=(json)=>{
				let str = "";
				let query = "";
				for(let i in json){
					
						str+= i + "=" + json[i] + "&"//json[i][j]是属性值
					
				}
				query=str.substring(0,str.length-1);
				return query;
	}
