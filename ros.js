function setSelect2Value(e, t, n) {
	return new Promise((s, l) => {
		$("#form2-tnvedid").select2("open"),
			(input = document.querySelector(t)).focus(),
			input.value = n,
			input.dispatchEvent(new KeyboardEvent("keydown", {
				bubbles: !0
			})), input.dispatchEvent(new KeyboardEvent("keypress", {
				bubbles: !0
			})), input.dispatchEvent(new KeyboardEvent("keyup", {
				bubbles: !0
			})), input.dispatchEvent(new Event("input", {
				bubbles: !0
			})), input.dispatchEvent(new Event("change", {
				bubbles: !0
			})), input.focus(), setTimeout(function () {
				let e = new KeyboardEvent("keydown", {
					bubbles: !0,
					cancelable: !0,
					keyCode: 13
				});
				input.dispatchEvent(e), s("result")
			}, 500)
	})
}
$(document).on('click', '#form2-reasonedit', function () {
	setTimeout(function () {
		$('#form2-reasonedit').val('Корректировка данных ТН ВЭД');
		setSelect2Value("#form2-tnvedid", ".select2-search--dropdown .select2-search__field", "8423 89 000 0").then(e => {
			$("#navResp_2-tab").click();
			for (let e = 1; e <= 17; e++) {
				$(".js-input-remove")[1] && $(".js-input-remove")[1].click();
			}
		})
	}, 500)
});
