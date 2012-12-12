//FirstView Component Constructor
function FirstView() {
	//create object instance, a parasitic subclass of Observable
	var self = Ti.UI.createView();
	
	var data_picker = require('ui/helper/DataPicker');	
	var picker_view_one = Titanium.UI.createView({});
	var picker_view_two = Titanium.UI.createView({});
	
	var data_one = []
	data_one.push({"title": "foo1", "id": 1})
	data_one.push({"title": "bar1", "id": 1})
	
	var data_two = []
	data_two.push({"title": "foo2", "id": 1})
	data_two.push({"title": "bar2", "id": 1})
	
	self.add(data_picker.init(null, data_one, picker_view_one));
	self.add(data_picker.init(null, data_two, picker_view_two));
	
	var aButton = Ti.UI.createButton({
		title : 'Picker1',
		height : 'auto',
		width : 'auto',
		top: 10
	});
	
	var bButton = Ti.UI.createButton({
		title : 'Picker2',
		height : 'auto',
		width : 'auto',
		top: 60
	});
	
	aButton.addEventListener('click', function() {;
		data_picker.raise([picker_view_one, picker_view_two]);
	});
	
	bButton.addEventListener('click', function() {;
		data_picker.raise([picker_view_two, picker_view_one]);
	});
	
	self.add(aButton);
	self.add(bButton);
	
	return self;
}

module.exports = FirstView;
