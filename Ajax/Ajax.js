
function createXMLHttpRequest()
{
	var xmlHttp=null;
	if(window.XMLHttpRequest)
	{
		xmlHttp=new XMLHttpRequest();
	}
	else{
	  try{
		xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
		}catch(e)
		  {
			xmlHttp=new ActiveXObject(microsoft.XMLHTTP);
		}
	}
	return xmlHttp;
}

function sendRequest(method,url,str_params,callback,error)
{
	var xmlHttp=createXMLHttpRequest();
	if(method.toLowerCase()=="get" && str_params!=null)
	{
		url+="?"+str_params;
	}
	xmlHttp.open(method,url,true);
	xmlHttp.onreadystatechange=function()
	{
		if(xmlHttp.readystate==4)
		{
			if(xmlHttp.status==200)
			{
			   if(typeof(callback)=="function")
			   {
				callback(xmlHttp);
			    }
			}else{
			   if(typeof(error)=="function")
			   {
				error(xmlHttp);
			   }
			}
		}
	};

	if(method.toLowerCase()=="post")
	{
	    xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	    xmlHttp.send(str_params);
	}else{
	    xmlHttp.send(null);
	}
}