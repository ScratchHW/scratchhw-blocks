// Do not edit this file; automatically generated by build.py.
'use strict';

let Blockly = require('openblock-blocks');

Blockly.Arduino=new Blockly.Generator("Arduino");Blockly.Arduino.addReservedWords("alignas,alignof,and,and_eq,asm,atomic_cancel,atomic_commit,atomic_noexcept,auto,bitand,bitor,bool,break,case,catch,char,char8_t,char16_t,char32_t,class,compl,concept,const,consteval,constexpr,constinit,const_cast,continue,co_await,co_return,co_yield,decltype,default,delete,do,double,dynamic_cast,else,enum,explicit,export,extern,false,float,for,friend,goto,if,inline,int,long,mutable,namespace,new,noexcept,not,not_eq,nullptr,operator,or,or_eq,private,protected,public,reflexpr,register,reinterpret_cast,requires,return,short,signed,sizeof,static,static_assert,static_cast,struct,switch,synchronized,template,this,thread_local,throw,true,try,typedef,typeid,typename,union,unsigned,using,virtual,void,volatile,wchar_t,while,xor,xor_eq,assert,int8_t,uint8_t,int16_t,uint16_t,int32_t,uint32_t,abs,labs,llabs,fabs,div,ldiv,lldiv,fmod,remainder,remquo,fma,fmax,fmin,fdim,nan,nanf,nanl,exp,exp2,expm1,log,log2,log10,log1p,ilogb,logb,sqrt,cbrt,hypot,pow,sin,cos,tan,asin,acos,atan,atan2,sinh,cosh,tanh,asinh,acosh,atanh,erf,erfc,lgamma,tgamma,ceil,floor,trunc,round,lround,llround,nearbyint,rint,lrint,llrint,frexp,ldxp,modf,scalbn,scalbln,nextafter,nexttowardcopysign,fpclassify,isfinite,isfinite,isinf,isnan,isnormal,signbitsize_t,fopen,freopen,fflush,fclose,setbuf,setvbuf,fwide,fread,fwritefgetc,fgetwa,getc,getwc,fgets,fgetws,fputc,fputwc,putc,putwc,fputs,fputws,getchar,getwchar,gets,putchar,putwchar,puts,ungetc,ungetwc,scanf,wscanf,fscanf,fwscanf,sscanf,swscanf,vscanf,vwscanf,vfscanf,vfwsanf,printf,wprintf,fprintf,fwprintf,sprintf,swprintf,snprintf,vprintf,vwprintf,vfprintf,vfwprintf,vsprintf,vwsprintf,vsnprintf,perrorftell,ftello,fseek,fseeko,fgetpos,fsetpos,rewind,clearerr,feof,ferrorremove,rename,tmpfile,tmpnam,strcpy,strncpy,strcat,strncat,strxfrm,strlen,strcmp,strncmp,strcoll,strchr,strrchr,strspn,strcspn,strpbrk,strstr,strtok,strerror,memset,memcpy,memmove,memcmp,memchr,setup,loop,define,include,HIGH,LOW,INPUT,OUTPUT,INPUT_PULLUP,interger,constants,floating,point,boolean,byte,word,double,string,String,array,pinMode,digitalWrite,digitalRead,analogReference,analogRead,analogWrite,tone,noTone,shiftOut,shitIn,pulseIn,millis,micros,delay,delayMicroseconds,min,max,constrain,map,randomSeed,random,lowByte,highByte,bitRead,bitWrite,bitSet,bitClear,bit,attachInterrupt,detachInterrupt,interrupts,noInterrupts");
Blockly.Arduino.ORDER_ATOMIC=0;Blockly.Arduino.ORDER_UNARY_POSTFIX=1;Blockly.Arduino.ORDER_UNARY_PREFIX=2;Blockly.Arduino.ORDER_MULTIPLICATIVE=3;Blockly.Arduino.ORDER_ADDITIVE=4;Blockly.Arduino.ORDER_SHIFT=5;Blockly.Arduino.ORDER_RELATIONAL=6;Blockly.Arduino.ORDER_EQUALITY=7;Blockly.Arduino.ORDER_BITWISE_AND=8;Blockly.Arduino.ORDER_BITWISE_XOR=9;Blockly.Arduino.ORDER_BITWISE_OR=10;Blockly.Arduino.ORDER_LOGICAL_AND=11;Blockly.Arduino.ORDER_LOGICAL_OR=12;Blockly.Arduino.ORDER_CONDITIONAL=13;
Blockly.Arduino.ORDER_ASSIGNMENT=14;Blockly.Arduino.ORDER_NONE=99;Blockly.Arduino.INDENT="  ";
Blockly.Arduino.init=function(a){Blockly.Arduino.includes_=Object.create(null);Blockly.Arduino.definitions_=Object.create(null);Blockly.Arduino.customFunctions_=Object.create(null);Blockly.Arduino.customFunctionsArgName_=Object.create(null);Blockly.Arduino.setups_=Object.create(null);Blockly.Arduino.loops_=Object.create(null);Blockly.Arduino.variableDB_?Blockly.Arduino.variableDB_.reset():Blockly.Arduino.variableDB_=new Blockly.Names(Blockly.Arduino.RESERVED_WORDS_);Blockly.Arduino.variableDB_.setVariableMap(a.getVariableMap());
var b=[];a=Blockly.Variables.allVariables(a);for(var c=0;c<a.length;c++)b[c]="float "+Blockly.Arduino.variableDB_.getName(a[c].name,Blockly.Variables.NAME_TYPE)+";";0<a.length&&(Blockly.Arduino.definitions_.variables=b.join("\n"))};
Blockly.Arduino.finish=function(a){var b=[];for(f in Blockly.Arduino.includes_)b.push(Blockly.Arduino.includes_[f]);var c=[];for(f in Blockly.Arduino.definitions_)c.push(Blockly.Arduino.definitions_[f]);var d=[];for(f in Blockly.Arduino.customFunctions_)d.push(Blockly.Arduino.customFunctions_[f]);var e=[];for(f in Blockly.Arduino.setups_)e.push(Blockly.Arduino.setups_[f]);var g=[];for(f in Blockly.Arduino.loops_)g.push(Blockly.Arduino.loops_[f]);var f="// generated by OpenBlock\n";0!=b.length&&(f+=
b.join("\n")+"\n\n");0!=c.length&&(f+=c.join("\n")+"\n\n");0!=d.length&&(f+=d.join("\n\n")+"\n\n");f+="void setup() {\n";0!=e.length&&(f+=Blockly.Arduino.INDENT+e.join("\n"+Blockly.Arduino.INDENT)+"\n");f=f+a+"}\n\nvoid _loop() {\n";0!=g.length&&(f+=Blockly.Arduino.INDENT+g.join("\n"+Blockly.Arduino.INDENT)+"\n");f+="}\n";f+="\nvoid loop() {\n"+Blockly.Arduino.INDENT+"_loop();\n}\n";delete Blockly.Arduino.definitions_;delete Blockly.Arduino.includes_;delete Blockly.Arduino.customFunctions_;delete Blockly.Arduino.customFunctionsArgName_;
delete Blockly.Arduino.setups_;delete Blockly.Arduino.loop_;Blockly.Arduino.variableDB_.reset();return f};
Blockly.Arduino.scrub_=function(a,b){if(null===b)return"";var c="";if(!a.outputConnection||!a.outputConnection.targetConnection){var d=a.getCommentText();d&&(c+=Blockly.Arduino.prefixLines(d,"// ")+"\n");for(var e=0;e<a.inputList.length;e++)a.inputList[e].type==Blockly.INPUT_VALUE&&(d=a.inputList[e].connection.targetBlock())&&(d=Blockly.Arduino.allNestedComments(d))&&(c+=Blockly.Arduino.prefixLines(d,"// "))}if("event_whenarduinobegin"!==a.type&&"procedures_definition"!==a.type&&"event_whenarduinobegin"!==
a.getTopStackBlock().type&&"procedures_definition"!==a.getTopStackBlock().type&&null===a.getSurroundParent())return"";e=b;null===a.getSurroundParent()&&""!==b&&("procedures_definition"!==a.type&&"procedures_prototype"!==a.type&&(e=Blockly.Arduino.INDENT+e,""!==c&&(c=Blockly.Arduino.INDENT+c)),e=e.replace(/\n/g,"\n"+Blockly.Arduino.INDENT),e=e.slice(0,e.length-2));a=a.nextConnection&&a.nextConnection.targetBlock();a=Blockly.Arduino.blockToCode(a);return c+e+a};
Blockly.Arduino.scrubNakedValue=function(a){return a+";\n"};Blockly.Arduino.quote_=function(a){a=a.replace(/\\/g,"\\\\").replace(/\n/g,"\\\n").replace(/\$/g,"\\$").replace(/'/g,"\\'");return'"'+a+'"'};Blockly.Arduino.matrix={};Blockly.Arduino.matrix=function(a){a=a.getFieldValue("MATRIX");isNaN(a)&&(a=0);return[a,Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.procedures={};Blockly.Arduino.procedures_definition=function(a){var b=Blockly.Arduino.statementToCode(a,"custom_block");b=b.slice(2);a=Blockly.Arduino.scrub_(a,b+" {\n");Blockly.Arduino.customFunctions_[b]=a+"}\n";return null};
Blockly.Arduino.procedures_call=function(a){var b=a.getProcCode();b=b.replace(/ /g,"_");b=b.replace(/%n/g,"N");b=b.replace(/%s/g,"S");b=b.replace(/%b/g,"B");b=Blockly.Arduino.variableDB_.getName(b,Blockly.Procedures.NAME_TYPE);for(var c=[],d=0;d<a.inputList.length;d++)if(a.inputList[d].type==Blockly.INPUT_VALUE)if(a.inputList[d].connection.targetBlock()){var e=a.inputList[d].connection.targetBlock();e=Blockly.Arduino.blockToCode(e);c.push(e[0])}else c.push("false");return b+"("+c.join(", ")+");\n"};
Blockly.Arduino.procedures_prototype=function(a){var b=a.getProcCode();a=a.displayNames_;var c=[];b=b.replace(/ /g,"_");for(var d=0;d<a.length;d++){var e=b.charAt(b.indexOf("%")+1),g=Blockly.Arduino.variableDB_.getName(a[d],Blockly.Procedures.NAME_TYPE);Blockly.Arduino.customFunctionsArgName_[a[d]]=g;"n"===e?(b=b.replace("%n","N"),c.push("float "+g)):"s"===e?(b=b.replace("%s","S"),c.push("String "+g)):(b=b.replace("%b","B"),c.push("boolean "+g))}b=Blockly.Arduino.variableDB_.getName(b,Blockly.Procedures.NAME_TYPE);
return"void "+b+"("+c.join(", ")+")"};Blockly.Arduino.argument_reporter_boolean=function(a){a=a.getFieldValue("VALUE");return[Blockly.Arduino.customFunctionsArgName_[a],Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.argument_reporter_number=function(a){a=a.getFieldValue("VALUE");return[Blockly.Arduino.customFunctionsArgName_[a],Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.argument_reporter_string=function(a){a=a.getFieldValue("VALUE");return[Blockly.Arduino.customFunctionsArgName_[a],Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.texts={};Blockly.Arduino.text=function(a){return[Blockly.Arduino.quote_(a.getFieldValue("TEXT")),Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.arduino={};Blockly.Arduino.arduino_pin_setPinMode=function(a){var b=a.getFieldValue("PIN")||"0";a=a.getFieldValue("MODE")||"INPUT";return"pinMode("+b+", "+a+");\n"};Blockly.Arduino.arduino_pin_setDigitalOutput=function(a){var b=a.getFieldValue("PIN")||"0";a=Blockly.Arduino.valueToCode(a,"LEVEL",Blockly.Arduino.ORDER_UNARY_POSTFIX)||"LOW";return"digitalWrite("+b+", "+a+");\n"};Blockly.Arduino.arduino_pin_menu_level=function(a){return[a.getFieldValue("level")||"LOW",Blockly.Arduino.ORDER_ATOMIC]};
Blockly.Arduino.arduino_pin_setPwmOutput=function(a){var b=a.getFieldValue("PIN")||"0";a=Blockly.Arduino.valueToCode(a,"OUT",Blockly.Arduino.ORDER_UNARY_POSTFIX)||0;return"analogWrite("+b+", "+a+");\n"};Blockly.Arduino.arduino_pin_readDigitalPin=function(a){return["digitalRead("+(a.getFieldValue("PIN")||"0")+")",Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.arduino_pin_readAnalogPin=function(a){return["analogRead("+(a.getFieldValue("PIN")||"A1")+")",Blockly.Arduino.ORDER_ATOMIC]};
Blockly.Arduino.arduino_pin_setServoOutput=function(a){var b=a.getFieldValue("PIN")||"A1";a=Blockly.Arduino.valueToCode(a,"OUT",Blockly.Arduino.ORDER_UNARY_POSTFIX)||0;Blockly.Arduino.includes_.include_servo="#include <Servo.h>";Blockly.Arduino.definitions_["definitions_servo"+b]="Servo servo_"+b+";";Blockly.Arduino.setups_["setups_servo"+b]="servo_"+b+".attach("+b+");";return"servo_"+b+".write("+a+");\n"};
Blockly.Arduino.arduino_pin_attachInterrupt=function(a){var b=a.getFieldValue("PIN")||"2",c=a.getFieldValue("MODE")||"RISING",d=Blockly.Arduino.statementToCode(a,"SUBSTACK");d=Blockly.Arduino.addLoopTrap(d,a.id);Blockly.Arduino.definitions_["definitions_ISR_"+c+b]="ISR_"+c+"_"+b+"() {\n"+d+"}";return"attachInterrupt(digitalPinToInterrupt("+b+"), ISR_"+c+"_"+b+", "+c+");\n"};
Blockly.Arduino.arduino_pin_detachInterrupt=function(a){return"detachInterrupt(digitalPinToInterrupt("+(a.getFieldValue("PIN")||"2")+");\n"};Blockly.Arduino.arduino_serial_serialBegin=function(a){return"Serial.begin("+(Blockly.Arduino.valueToCode(a,"VALUE",Blockly.Arduino.ORDER_UNARY_POSTFIX)||"9600")+");\n"};Blockly.Arduino.arduino_serial_serialPrint=function(a){return"Serial.println("+(Blockly.Arduino.valueToCode(a,"VALUE",Blockly.Arduino.ORDER_UNARY_POSTFIX)||"")+");\n"};
Blockly.Arduino.arduino_serial_serialAvailable=function(){return["Serial.available()",Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.arduino_serial_serialReadAByte=function(){return["Serial.read()",Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.arduino_serial_multiSerialBegin=function(a){var b=a.getFieldValue("NO")||0;a=Blockly.Arduino.valueToCode(a,"VALUE",Blockly.Arduino.ORDER_UNARY_POSTFIX)||"9600";return 0===b?"Serial.begin("+a+");\n":"Serial"+b+".begin("+a+");\n"};
Blockly.Arduino.arduino_serial_multiSerialPrint=function(a){var b=a.getFieldValue("NO")||0;a=Blockly.Arduino.valueToCode(a,"VALUE",Blockly.Arduino.ORDER_UNARY_POSTFIX)||"";return 0===b?"Serial.println("+a+");\n":"Serial"+b+".println("+a+");\n"};Blockly.Arduino.arduino_serial_multiSerialAvailable=function(a){return["Serial"+(a.getFieldValue("NO")||0)+".available()",Blockly.Arduino.ORDER_ATOMIC]};
Blockly.Arduino.arduino_serial_multiSerialReadAByte=function(a){return["Serial"+(a.getFieldValue("NO")||0)+".read()",Blockly.Arduino.ORDER_ATOMIC]};
Blockly.Arduino.arduino_data_dataMap=function(a){var b=Blockly.Arduino.valueToCode(a,"DATA",Blockly.Arduino.ORDER_UNARY_POSTFIX)||0,c=Blockly.Arduino.valueToCode(a,"ARG0",Blockly.Arduino.ORDER_UNARY_POSTFIX)||1,d=Blockly.Arduino.valueToCode(a,"ARG1",Blockly.Arduino.ORDER_UNARY_POSTFIX)||100,e=Blockly.Arduino.valueToCode(a,"ARG2",Blockly.Arduino.ORDER_UNARY_POSTFIX)||1;a=Blockly.Arduino.valueToCode(a,"ARG3",Blockly.Arduino.ORDER_UNARY_POSTFIX)||1E3;return["map("+b+", "+c+", "+d+", "+e+", "+a+")",Blockly.Arduino.ORDER_ATOMIC]};
Blockly.Arduino.arduino_data_dataConstrain=function(a){var b=Blockly.Arduino.valueToCode(a,"DATA",Blockly.Arduino.ORDER_UNARY_POSTFIX)||0,c=Blockly.Arduino.valueToCode(a,"ARG0",Blockly.Arduino.ORDER_UNARY_POSTFIX)||1;a=Blockly.Arduino.valueToCode(a,"ARG1",Blockly.Arduino.ORDER_UNARY_POSTFIX)||100;return["constrain("+b+", "+c+", "+a+")",Blockly.Arduino.ORDER_ATOMIC]};
Blockly.Arduino.arduino_data_dataConvert=function(a){var b=Blockly.Arduino.valueToCode(a,"DATA",Blockly.Arduino.ORDER_UNARY_POSTFIX)||0;switch(a.getFieldValue("TYPE")||"WHOLE_NUMBER"){case "WHOLE_NUMBER":var c="String("+b+").toInt()";break;case "DECIMAL":c="String("+b+").toFloat()";break;case "STRING":c="String("+b+")"}return[c,Blockly.Arduino.ORDER_ATOMIC]};
Blockly.Arduino.arduino_data_dataConvertASCIICharacter=function(a){return["String(char("+(Blockly.Arduino.valueToCode(a,"DATA",Blockly.Arduino.ORDER_UNARY_POSTFIX)||"0")+"))",Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.arduino_data_dataConvertASCIINumber=function(a){return["toascii(String("+(Blockly.Arduino.valueToCode(a,"DATA",Blockly.Arduino.ORDER_UNARY_POSTFIX)||"0")+")[0])",Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.event={};Blockly.Arduino.event_whenarduinobegin=function(){Blockly.Arduino.includes_.arduino="#include <Arduino.h>";return""};Blockly.Arduino.math={};Blockly.Arduino.math_number=function(a){a=parseFloat(a.getFieldValue("NUM"));isNaN(a)&&(a=0);return[a,0>a?Blockly.Arduino.ORDER_UNARY_PREFIX:Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.math_angle=Blockly.Arduino.math_number;Blockly.Arduino.math_positive_number=Blockly.Arduino.math_number;Blockly.Arduino.math_whole_number=Blockly.Arduino.math_number;Blockly.Arduino.data={};Blockly.Arduino.data_variable=function(a){return[Blockly.Arduino.variableDB_.getName(a.getFieldValue("VARIABLE"),Blockly.Variables.NAME_TYPE),Blockly.Arduino.ORDER_ATOMIC]};
Blockly.Arduino.data_setvariableto=function(a){var b=Blockly.Arduino.valueToCode(a,"VALUE",Blockly.Arduino.ORDER_ASSIGNMENT)||"0";a=Blockly.Arduino.variableDB_.getName(a.getFieldValue("VARIABLE"),Blockly.Variables.NAME_TYPE);parseFloat(b.slice(1,-1))==b.slice(1,-1)&&(b=parseFloat(b.slice(1,-1)).toString());return a+" = "+b+";\n"};
Blockly.Arduino.data_changevariableby=function(a){var b=Blockly.Arduino.valueToCode(a,"VALUE",Blockly.Arduino.ORDER_ASSIGNMENT)||"0";a=Blockly.Arduino.variableDB_.getName(a.getFieldValue("VARIABLE"),Blockly.Variables.NAME_TYPE);parseFloat(b.slice(1,-1))==b.slice(1,-1)&&(b=parseFloat(b.slice(1,-1)).toString());return a+" += "+b+";\n"};Blockly.Arduino.colour={};Blockly.Arduino.colour_picker=function(a){return[a.getFieldValue("COLOUR"),Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.control={};Blockly.Arduino.control_wait=function(a){return"delay("+Blockly.Arduino.valueToCode(a,"DURATION",Blockly.Arduino.ORDER_UNARY_POSTFIX)+" * 1000);\n"};Blockly.Arduino.control_repeat=function(a){var b=Blockly.Arduino.valueToCode(a,"TIMES",Blockly.Arduino.ORDER_UNARY_POSTFIX),c=Blockly.Arduino.statementToCode(a,"SUBSTACK");c=Blockly.Arduino.addLoopTrap(c,a.id);return a="for(int i=0; i<"+b+"; i++){\n"+c+"}\n"};
Blockly.Arduino.control_forever=function(a){var b=Blockly.Arduino.statementToCode(a,"SUBSTACK");b=Blockly.Arduino.addLoopTrap(b,a.id);return"while(1){\n"+b+(Blockly.Arduino.INDENT+"_loop();\n}\n")};Blockly.Arduino.control_if=function(a){var b=Blockly.Arduino.valueToCode(a,"CONDITION",Blockly.Arduino.ORDER_NONE)||"false",c=Blockly.Arduino.statementToCode(a,"SUBSTACK");c=Blockly.Arduino.addLoopTrap(c,a.id);return a="if("+b+"){\n"+c+"}\n"};
Blockly.Arduino.control_if_else=function(a){var b=Blockly.Arduino.valueToCode(a,"CONDITION",Blockly.Arduino.ORDER_NONE)||"false",c=Blockly.Arduino.statementToCode(a,"SUBSTACK");c=Blockly.Arduino.addLoopTrap(c,a.id);var d=Blockly.Arduino.statementToCode(a,"SUBSTACK2");d=Blockly.Arduino.addLoopTrap(d,a.id);a="if("+b+"){\n"+c+"}\nelse{\n";a+=d;return a+="}\n"};
Blockly.Arduino.control_wait_until=function(a){return"while(!"+(Blockly.Arduino.valueToCode(a,"CONDITION",Blockly.Arduino.ORDER_UNARY_POSTFIX)||"false")+") {\n"+(Blockly.Arduino.INDENT+"_loop();\n}\n")};Blockly.Arduino.control_repeat_until=function(a){var b=Blockly.Arduino.valueToCode(a,"CONDITION",Blockly.Arduino.ORDER_UNARY_POSTFIX)||"false",c=Blockly.Arduino.statementToCode(a,"SUBSTACK");c=Blockly.Arduino.addLoopTrap(c,a.id);return a="while(!"+b+") {\n"+c+(Blockly.Arduino.INDENT+"_loop();\n}\n")};Blockly.Arduino.operator={};Blockly.Arduino.operator_arithmetic=function(a){var b={operator_add:[" + ",Blockly.Arduino.ORDER_ADDITIVE],operator_subtract:[" - ",Blockly.Arduino.ORDER_ADDITIVE],operator_multiply:[" * ",Blockly.Arduino.ORDER_MULTIPLICATIVE],operator_divide:[" / ",Blockly.Arduino.ORDER_MULTIPLICATIVE]}[a.type],c=b[0];b=b[1];var d=Blockly.Arduino.valueToCode(a,"NUM1",b)||"0";a=Blockly.Arduino.valueToCode(a,"NUM2",b)||"0";return[d+c+a,b]};Blockly.Arduino.operator_add=Blockly.Arduino.operator_arithmetic;
Blockly.Arduino.operator_subtract=Blockly.Arduino.operator_arithmetic;Blockly.Arduino.operator_multiply=Blockly.Arduino.operator_arithmetic;Blockly.Arduino.operator_divide=Blockly.Arduino.operator_arithmetic;Blockly.Arduino.operator_random=function(a){var b=Blockly.Arduino.valueToCode(a,"FROM",Blockly.Arduino.ORDER_UNARY_POSTFIX)||"0";a=Blockly.Arduino.valueToCode(a,"TO",Blockly.Arduino.ORDER_UNARY_POSTFIX)||"0";return["random("+b+", "+a+")",Blockly.Arduino.ORDER_UNARY_POSTFIX]};
Blockly.Arduino.operator_compare=function(a){var b="operator_equals"==a.type?Blockly.Arduino.ORDER_EQUALITY:Blockly.Arduino.ORDER_RELATIONAL,c=Blockly.Arduino.valueToCode(a,"OPERAND1",b),d=Blockly.Arduino.valueToCode(a,"OPERAND2",b);'""'===c&&(c="0");'""'===d&&(d="0");parseFloat(c.slice(1,-1))==c.slice(1,-1)&&(c=parseFloat(c.slice(1,-1)).toString());parseFloat(d.slice(1,-1))==d.slice(1,-1)&&(d=parseFloat(d.slice(1,-1)).toString());return[c+{operator_gt:" > ",operator_equals:" == ",operator_lt:" < "}[a.type]+
d,b]};Blockly.Arduino.operator_gt=Blockly.Arduino.operator_compare;Blockly.Arduino.operator_equals=Blockly.Arduino.operator_compare;Blockly.Arduino.operator_lt=Blockly.Arduino.operator_compare;Blockly.Arduino.operator_operation=function(a){var b="operator_and"==a.type?Blockly.Arduino.ORDER_LOGICAL_AND:Blockly.Arduino.ORDER_LOGICAL_OR,c=Blockly.Arduino.valueToCode(a,"OPERAND1",b)||"0",d=Blockly.Arduino.valueToCode(a,"OPERAND2",b)||"0";return[c+{operator_and:" && ",operator_or:" || "}[a.type]+d,b]};
Blockly.Arduino.operator_and=Blockly.Arduino.operator_operation;Blockly.Arduino.operator_or=Blockly.Arduino.operator_operation;Blockly.Arduino.operator_not=function(a){var b=Blockly.Arduino.ORDER_UNARY_PREFIX;return["!"+(Blockly.Arduino.valueToCode(a,"OPERAND",b)||"false"),b]};
Blockly.Arduino.operator_join=function(a){var b=Blockly.Arduino.ORDER_UNARY_PREFIX,c=Blockly.Arduino.valueToCode(a,"STRING1",b)||"''";a=Blockly.Arduino.valueToCode(a,"STRING2",b)||"''";return["String("+c+") + String("+a+")",Blockly.Arduino.ORDER_ADDITIVE]};
Blockly.Arduino.operator_letter_of=function(a){var b=Blockly.Arduino.ORDER_UNARY_PREFIX,c=Blockly.Arduino.valueToCode(a,"STRING",b)||"''";a=Blockly.Arduino.valueToCode(a,"LETTER",b)||"0";a=parseFloat(a)==a?a-1:a+" - 1";return["String("+c+").charAt("+a+")",Blockly.Arduino.ORDER_NONE]};Blockly.Arduino.operator_length=function(a){return["String("+(Blockly.Arduino.valueToCode(a,"STRING",Blockly.Arduino.ORDER_UNARY_PREFIX)||"''")+").length()",Blockly.Arduino.ORDER_NONE]};
Blockly.Arduino.operator_contains=function(a){var b=Blockly.Arduino.ORDER_UNARY_PREFIX,c=Blockly.Arduino.valueToCode(a,"STRING1",b)||"''";a=Blockly.Arduino.valueToCode(a,"STRING2",b)||"0";return["String("+c+").indexof(String("+a+"))",Blockly.Arduino.ORDER_NONE]};Blockly.Arduino.operator_mod=function(a){var b=Blockly.Arduino.ORDER_MULTIPLICATIVE,c=Blockly.Arduino.valueToCode(a,"NUM1",b)||"0";a=Blockly.Arduino.valueToCode(a,"NUM2",b)||"0";return[c+" % "+a,b]};
Blockly.Arduino.operator_round=function(a){return["round("+(Blockly.Arduino.valueToCode(a,"NUM",Blockly.Arduino.ORDER_UNARY_POSTFIX)||"0")+")",Blockly.Arduino.ORDER_NONE]};
Blockly.Arduino.operator_mathop=function(a){var b=Blockly.Arduino.ORDER_UNARY_POSTFIX,c=a.getFieldValue("OPERATOR");a=Blockly.Arduino.valueToCode(a,"NUM",b)||"0";var d="";b=Blockly.Arduino.ORDER_NONE;switch(c){case "abs":d="abs("+a+")";break;case "floor":d="floor("+a+")";break;case "ceiling":d="ceiling("+a+")";break;case "sqrt":d="sqrt("+a+")";break;case "sin":d="sin("+a+" / 180.0 * PI)";break;case "cos":d="cos("+a+" / 180.0 * PI)";break;case "tan":d="tan("+a+" / 180.0 * PI)";break;case "asin":d=
"asin("+a+") / PI * 180";b=Blockly.Arduino.ORDER_MULTIPLICATIVE;break;case "acos":d="acos("+a+") / PI * 180";b=Blockly.Arduino.ORDER_MULTIPLICATIVE;break;case "atan":d="atan("+a+") / PI * 180";b=Blockly.Arduino.ORDER_MULTIPLICATIVE;break;case "ln":d="log("+a+")";break;case "log":d="log10("+a+")";break;case "e ^":d="exp("+a+")";break;case "10 ^":d="pow(10, "+a+")"}return[d,b]};
