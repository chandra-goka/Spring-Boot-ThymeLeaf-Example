GET: $(document).ready(
		function() {

			// GET REQUEST
			$("#greet").click(function(event) {
				event.preventDefault();
				ajaxGet();
			});

			// DO GET
			function ajaxGet() {
				$.ajax({
					url : "http://localhost:8080/greet",
					success : function(result) {
						$("#response").html(result);
					}
				});
			}
})