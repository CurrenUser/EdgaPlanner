
const upDownMenu = {
visible : false,
id : null,
	GetId : function (idName = 'UpDownOptions') {
		this.id = document.getElementById(idName);
	}
};

upDownMenu.GetId();

function MouseClick()
{
	if (upDownMenu.id )
	{
	  if ( upDownMenu.visible )
	  {
	  	 upDownMenu.visible = false;
	  	 upDownMenu.id.style.display = "none";

	  }	
	  else
	  {
		 upDownMenu.visible = true;
		 upDownMenu.id.style.display = "block";
	  }
	}
	else
	{
		console.log('Menu for component  UpDownMenu.id wasn`t find ');
	}

}