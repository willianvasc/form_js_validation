$("#cadastrar").click((event)=>{
 validainput();
 validaSenha();
    });

function validainput(){
    if($("#nome").val()==""){
        $("#nome").css("border-bottom","2px solid #ff000061");
        }else{
            $("#nome").css("border-bottom","0px solid #ff000061");
        }
        if($("#email").val()==""){
            $("#email").css("border-bottom","2px solid #ff000061");
        }else{
            $("#email").css("border-bottom","0px solid #ff000061");
        }
        if($("#nascimento").val()==""){
            $("#nascimento").css("border-bottom","2px solid #ff000061");
        }else{
            $("#nascimento").css("border-bottom","0px solid #ff000061");
        }
        if($("#email").val()=="" || $("#nome").val()=="" || $("#nascimento").val()==""){
            event.preventDefault();
        }
}


function validaSenha(){
 if($("#senha").val()!=$("#confirm_pass").val()){
    $("#senha").css("border-bottom","2px solid #ff000061"); 
    $("#confirm_pass").css("border-bottom","2px solid #ff000061"); 
    event.preventDefault();
 }else{
    $("#senha").css("border-bottom","0px solid #ff000061"); 
    $("#confirm_pass").css("border-bottom","0px solid #ff000061"); 

 }
}