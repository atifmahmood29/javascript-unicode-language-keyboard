var lanChar = {};
 lanChar["97"] = '\u0627';
 lanChar["65"] = '\u0653';
 lanChar["98"] = '\u0628';
 lanChar["112"] = '\u067E';
 lanChar["116"] = '\u062A';
 lanChar["84"] = '\u0679';
 lanChar["67"] = '\u062B';
 lanChar["106"] = '\u062C';
 lanChar["99"] = '\u0686';
 lanChar["72"] = '\u062D';
 lanChar["75"] = '\u062E';
 lanChar["100"] = '\u062F';
 lanChar["68"] = '\u0688';
 lanChar["90"] = '\u0630';
 lanChar["114"] = '\u0631';
 lanChar["82"] = '\u0691';
 lanChar["122"] = '\u0632';
 lanChar["88"] = '\u0698';
 lanChar["115"] = '\u0633';
 lanChar["120"] = '\u0634';
 lanChar["83"] = '\u0635';
 lanChar["74"] = '\u0636';
 lanChar["118"] = '\u0637';
 lanChar["86"] = '\u0638';
 lanChar["101"] = '\u0639';
 lanChar["71"] = '\u063A';
 lanChar["102"] = '\u0641';
 lanChar["113"] = '\u0642';
 lanChar["107"] = '\u06A9';
 lanChar["81"] = '\u0643';
 lanChar["103"] = '\u06AF';
 lanChar["108"] = '\u0644';
 lanChar["109"] = '\u0645';
 lanChar["110"] = '\u0646';
 lanChar["78"] = '\u06BA';
 lanChar["119"] = '\u0648';
 lanChar["66"] = '\u0647';
 lanChar["104"] = '\u06BE';
 lanChar["111"] = '\u06C1';
 lanChar["117"] = '\u0654';
 lanChar["105"] = '\u06CC';
 lanChar["121"] = '\u06D2';
 lanChar["79"] = '\u0629';
 //// numbers ////
 lanChar["48"] = '\u0660';
 lanChar["49"] = '\u0661';
 lanChar["50"] = '\u0662';
 lanChar["51"] = '\u0663';
 lanChar["52"] = '\u0664';
 lanChar["53"] = '\u0665';
 lanChar["54"] = '\u0666';
 lanChar["55"] = '\u0667';
 lanChar["56"] = '\u0668';
 lanChar["57"] = '\u0669';
 lanChar["85"] = '\u0626';
 lanChar["89"] = '\u064A';
 //// Symbols ////
 lanChar["62"] = '\u064E';
 lanChar["60"] = '\u0650';
 lanChar["73"] = '\u0670';
 lanChar["80"] = '\u064F';
 lanChar["69"] = '\u0651';
 lanChar["44"] = '\u060C';
 lanChar["126"] = '\u064B';
 lanChar["96"] = '\u064D';
 lanChar["63"] = '\u061F';
 lanChar["59"] = '\u061B';
//// not in use ////
 lanChar["76"] = '';
 lanChar["77"] = '';
 lanChar["87"] = '';
 
function urduUnicode(th,ev)
{
	if (ev.altKey || ev.ctrlKey){	
		return true;
	}

	ascivalue = ev.charCode;	
	if(lanChar[ascivalue] != undefined){
		//th.value = th.value + lanChar[ascivalue];
		
		var strPos = th.selectionStart;
		var front = th.value.substring(0, strPos);
		var back = th.value.substring(strPos, th.value.length);
		th.value = front + lanChar[ascivalue] + back;
		
		th.selectionStart = strPos + 1;
		th.selectionEnd = strPos + 1;
			
		return false; 
	}else{
		return true;
	}	   
}