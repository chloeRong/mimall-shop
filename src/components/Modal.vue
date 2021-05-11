<template>
	<transition name="slide">
		<div class="modal" v-if="showModal">
			<div class="mask"></div>
			<div class="modal-dialog">
				<div class="modal-header">
					<span>{{ title }}</span>
					<a href="javascript:;" class="icon-close" @click="$emit('close')"></a>
				</div>
				<div class="modal-body">
					<slot name="body"></slot>
				</div>
				<div class="modal-footer">
					<a
						href="javascript:;"
						v-if="btnType == 1"
						class="btn"
						@click="$emit('submit')"
						>{{ sureText }}</a
					>
					<a
						href="javascript:;"
						v-if="btnType == 2"
						class="btn btn-default"
						@click="$emit('close')"
						>{{ cancelText }}</a
					>
					<div class="btn-group" v-if="btnType == 3">
						<a href="javascript:;" class="btn">{{ sureText }}</a>
						<a
							href="javascript:;"
							class="btn btn-default"
							@click="$emit('close')"
							>{{ cancelText }}</a
						>
					</div>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
export default {
	name: 'modal',
	props: {
		// 模态框的类型
		modaltype: {
			type: String,
			default: 'form'
		},
		// 模态框的标题
		title: String,
		// 按钮类型 1:确定，2:取消，3:确定和取消
		btnType: String,
		//确定按钮文本
		sureText: {
			type: String,
			default: '确定'
		},
		//取消按钮文本
		cancelText: {
			type: String,
			defatult: '取消'
		},
		//是否显示模态框
		showModal: Boolean
	},
	data() {
		return {}
	},
	components: {},
	methods: {}
}
</script>
<style lang="scss" scoped>
.modal {
	@include fixed(0, 0);
	transition: all 0.4s;
	&.slide-enter-active,
	&.slide-leave-active {
		top: 0;
	}
	&.slide-enter,
	&.slide-leave-to {
		top: -100%;
	}
	.mask {
		@include fixed(0, 0);
		background-color: #000;
		opacity: 0.5;
	}
	.modal-dialog {
		width: 660px;
		height: auto;
		position: absolute;
		left: 50%;
		top: 40%;
		z-index: 16;
		background-color: $colorG;
		transform: translate(-50%, -50%);

		.modal-header {
			height: 60px;
			line-height: 60px;
			background-color: $colorJ;
			font-size: $fontI;
			padding: 0 25px;
			.icon-close {
				position: absolute;
				top: 23px;
				right: 25px;
				@include bgImg(14px, 14px, '/imgs/icon-close.png');
				transition: transform 0.3s;

				&:hover {
					transform: scale(1.5);
				}
			}
		}
		.modal-body {
			padding: 42px 40px 54px;
			font-size: 14px;
		}
		.modal-footer {
			background-color: $colorJ;
			text-align: center;
			padding: 32px 0;
		}
	}
}
</style>
