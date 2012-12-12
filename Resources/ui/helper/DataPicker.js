/*
 var data_picker = require('commons/DataPicker');	
 var picker_view_surface = Titanium.UI.createView({});
 var data = []
 data.push({"title": "foo", "id": 1})
 data.push({"title": "bar", "id": 1})
 data_picker.init(null, data, picker_view_surface)
 data_picker.raise([picker_view_surface, picker_view_painter, picker_view_product]);
*/
var slide_in =  Titanium.UI.createAnimation({bottom:0});
var slide_out =  Titanium.UI.createAnimation({bottom:-251});
var picker_view_sup = Titanium.UI.createView({});
var picker_view_painter = Titanium.UI.createView({});

function raise(items){
	for(var i = 0; i < items.length; i++){
		if(i==0){
			items[i].animate(slide_in);
		}else{
			items[i].animate(slide_out);
		}
	}
}

function init(button, items, picker_view){
	picker_view.height = 251;
	picker_view.bottom = -251;
	 
	var cancel_sup =  Titanium.UI.createButton({
		title:L('abort'),
		style:Titanium.UI.iPhone.SystemButtonStyle.BORDERED
	});
	 
	var done_sup =  Titanium.UI.createButton({
		title:L('done'),
		style:Titanium.UI.iPhone.SystemButtonStyle.DONE
	});
	 
	var spacer_sup =  Titanium.UI.createButton({
		systemButton:Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE
	});
	 
	var toolbar_sup =  Titanium.UI.iOS.createToolbar({
		top:0,
		items:[cancel_sup,spacer_sup,done_sup]
	});
	 
	var picker_sup = Titanium.UI.createPicker({
		top:43
	});
	picker_sup.selectionIndicator=true;
    
    var picker_data_sup = [];
    for(var i = 0; i < items.length; i++){
    	picker_data_sup.push(Titanium.UI.createPickerRow({title:items[i].title, id: items[i].id}));
    }
	
	picker_sup.add(picker_data_sup);
	
	picker_view.add(toolbar_sup);
	picker_view.add(picker_sup);
	
	
	cancel_sup.addEventListener('click',function() {
		picker_view.animate(slide_out);
	});
	
	done_sup.addEventListener('click',function() {
		Ti.API.log("selected " + picker_sup.getSelectedRow(0).title + " id " + picker_sup.getSelectedRow(0).id);
		if(button!=null){
			button.title =  picker_sup.getSelectedRow(0).title;
			button.idItem =  picker_sup.getSelectedRow(0).id;
		}
		picker_view.animate(slide_out);
	});
	
	return picker_view;
}

exports.init = init;
exports.raise = raise;
