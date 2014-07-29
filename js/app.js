

var Modelo = Backbone.Model.extend({
	defaults : {
		title : 'titulo por defecto',
		name : 'nombre por defecto',
		id : 1
	}
});


var Coleccion = Backbone.Collection.extend({
	model : Modelo
});
var col = new Coleccion({});

var VistaApp = Backbone.View.extend({
	el : 'body',
	events : {
		'click button' : 'addOne'
	},

	initialize : function(){
		this.$titulo = this.$('#titulo');
		this.$nombre = this.$('#nombre');
		this.listenTo(col, 'add', this.addOne);
	},
	addOne : function(modelo){
		//col.add(modelo, this.newAttributes());
		//col.create( this.newAttributes() );
		modelo = new Modelo( this.newAttributes() );
		console.log(modelo.toJSON());
		col.add(modelo);
		var view = new VistaModelo({ model : modelo });
		
		//col.add(this.model);
		//debugger;
		$("#cont").prepend( view.render().el );
		//debugger;
	},
	newAttributes : function(){
		//debugger;
		return {
			title : this.$titulo.val(),
			name : this.$nombre.val()
		}
	},

	render : function(){
		console.log("asd");
	}
});

var VistaModelo = Backbone.View.extend({
	tagName : "div",
	initialize : function(){
		console.log("hola");
	},
	template : _.template( $("#modelo").html() ),

	render : function(){
		//debugger;
		this.$el.html( this.template(this.model.toJSON()) );
		//debugger;
		return this;
		//console.log("asddd");
		//debugger;
	}
});