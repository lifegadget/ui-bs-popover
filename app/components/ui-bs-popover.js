import Ember from 'ember';

export default Ember.Component.extend({
	// Component Props
	tagName: 'span',
	classNames: ['ui-bs-popover'],
	attributeBindings: ['popoverStyles:style'],
	// Content
	content: null,
	message: null,
	title: null,
	// Bootstrap Props
	animation: true,
	delay: 0,
	html: true,
	placement: 'auto bottom',
	triggerEvent: 'click',
	viewport: { selector: 'body', padding: 0 },
	// Bootstrap options container
	options: Ember.computed('message','title','animation','delay','html','placement','trigger','viewport', function() {
		return {
			content: this.get('message'),
			title: this.get('title'),
			animation: this.get('animation'),
			delay: this.get('delay'),
			html: this.get('html'),
			placement: this.get('placement'),
			trigger: this.get('triggerEvent'),
			viewport: this.get('viewport')
		};
	}),
	// Non-Bootstrap Configuration Options
	cursor: 'pointer',
	popoverStyles: Ember.computed('cursor', function() {
		var style = this.getProperties('cursor');
		if (!style.cursor) {
			style.cursor === 'auto';
		}
		return `cursor: ${style.cursor};`;
	}),
	
	// Initialiser
	_initialise: Ember.on('didInsertElement', function() {
		Ember.run.next(this, function() {
			var options = this.get('options');
			try {
				this.$().popover(options);
			} catch (e) {
				console.warn('Couldn\'t initialise popover. Check and make sure that Bootstrap and the popover JS are included in your Brocfile. Error encountered: %o', e);
			}			
		});
	}),
	_cleanUp: Ember.on('willDestroyElement', function() {
		this.$().popover('destroy');
	})
});
