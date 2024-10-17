//* Task server
export function server() {
	$.browserSync.init({
		server: {
			baseDir: $.path.root
		},
		notify: false,
	});
}