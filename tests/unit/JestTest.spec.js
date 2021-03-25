import JestTest from "@/components/JestTest.vue";
import { mount } from "@vue/test-utils";

describe("JestTest", () => {
	test("If user is not logged in, do not show logout button", () => {
		const wrapper = mount(JestTest);
		// Testing our output here, is the button invisible when it should be
		expect(wrapper.find("button").isVisible()).toBe(false);
	});

	test("If user is logged in, show logout button", async () => {
		const wrapper = mount(JestTest);
		wrapper.setData({ loggedIn: true });
		// Wait for the DOM to load our button since we're testing if the user *is* logged in, the button should be visible
		// vm here refers to view-model, as in MVVM, which is the structural design pattern that Vue follows
		// nextTick() is a method that comes from the Vue base package
		await wrapper.vm.$nextTick();
		// Testing our output here, is the button visible when it should be
		// we assert what the result should be with the expect() function from Jest
		expect(wrapper.find("button").isVisible()).toBe(true);
	});
});
