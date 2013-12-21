define(['jquery', 'mediator'], function($, mediator) {
	describe("Mediator", function() {
		it("should be a module", function() {
			expect(mediator).toBeDefined();
		});


		it("should have function publish", function() {
			expect(mediator.publish).toBeDefined();
		});


		it("should be possible subscribe to a topic", function() {
			mediator.subscribe("inbox/a", function() {});
			expect(mediator.topics["inbox/a"].length).toBe(1);
		});


		it("should be possible to publish", function() {
			var callbackCount = 0;

			mediator.subscribe("inbox/a", function() {
				callbackCount++;
			});

			mediator.publish("inbox/a");

			expect(callbackCount).toBe(1);

		});

		it("should be possible to pas arguments", function() {
			var params = 0;

			mediator.subscribe("inbox/b", function() {
				params = arguments;
			});

			mediator.publish("inbox/b", "ljksdhfsdlk", "dfjgh");

			expect(params.length).toBe(2);

		});

	})
});
