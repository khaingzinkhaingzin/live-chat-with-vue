<template>
	<div class="container">
		<Navbar></Navbar>
	</div>
</template>

<script>
import Navbar from "../components/Navbar";
import getUser from "../composable/getUser"
import { useRouter } from 'vue-router'
import { watch } from 'vue'
export default {
	components: { Navbar },
	setup() {
		let { user } = getUser();
		let router = useRouter();

		watch(user, () => {
			if (!user.value) {
				// redirect welcome 
				router.push("/");
			}
		})
	}
};
</script>

<style>
nav {
	padding: 20px;
	border-bottom: 1px solid #eee;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
nav p {
	margin: 2px auto;
	font-size: 16px;
	color: #444;
}
nav p.email {
	font-size: 14px;
	color: #999;
}
</style>
