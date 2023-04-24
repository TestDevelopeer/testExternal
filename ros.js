let scales = [
  {
    name: 'Весы автомобильные в приямке АСП-40-8-1-П Цифровые датчики Kelli (Китай), Zemic (США)',
    weight: 40,
    length: 8,
    type: 'Весы автомобильные в приямке'
  },
  {
    name: 'Весы автомобильные в приямке АСП-40-8-1-П Цифровые датчики HBM (Германия)'
  }
];

function returnDesc(weight, length, type){
  return `${type} ${weight} тонн ${length} метров от компании «АСП» - это современное решение для точного и быстрого взвешивания грузов на предприятии. Они позволяют контролировать вес транспорта, оптимизировать логистику и сократить издержки на перевозку. Весы имеют высокую точность и надежность измерений, что обеспечивает точность взвешивания. Также у них есть возможность удаленного управления, что упрощает и ускоряет процесс взвешивания. Компания «АСП» предлагает своим клиентам высококачественные весы и профессиональное обслуживание по доступным ценам. Кроме того, компания предоставляет гарантийное обслуживание и круглосуточную техническую поддержку своим клиентам. ${type} ${weight} тонн ${length} метров от компании «АСП» - это надежный и удобный инструмент для контроля грузов на предприятии. Они идеально подходят для использования на складах, производственных объектах и транспортных компаниях.`;
}

$(document).on('focusout', '#form2-servicename', function(){
  let value = $(this).val();
  let scale;
  for (let i in scales) {
    if (scales[i].name === value) {
      scale = scales[i];
      break;
    }
  }
  let desc = returnDesc(scale.weight, scale.length, scale.type);
  $('#form2-servicenameen').val('-');
  $('#form2-description').text(desc);
  $('#select2-form2-okeiid-container').click();
  $('.select2-search--dropdown .select2-search__field').val('642');
  $('#select2-form2-okeiid-results li:first').click();
  
  function setSelect2Value(selectId, inputClass, inputValue) {
  let promise = new Promise((resolve, reject) => {
    $(selectId).select2('open')
    input = document.querySelector(inputClass);
    input.focus();
    input.value = inputValue;
    input.dispatchEvent(new KeyboardEvent('keydown', {
      bubbles: true
    }));
    input.dispatchEvent(new KeyboardEvent('keypress', {
      bubbles: true
    }));
    input.dispatchEvent(new KeyboardEvent('keyup', {
      bubbles: true
    }));
    input.dispatchEvent(new Event('input', {
      bubbles: true
    }));
    input.dispatchEvent(new Event('change', {
      bubbles: true
    }));
    input.focus();
    setTimeout(function() {
      const ke = new KeyboardEvent('keydown', {
        bubbles: true,
        cancelable: true,
        keyCode: 13
      });
      input.dispatchEvent(ke);

      resolve("result");
    }, 500);
  });

  return promise;
}

setSelect2Value('#form2-okeiid', '.select2-search--dropdown .select2-search__field', '642').then(
  result => {
    setSelect2Value('#form2-tnvedid', '.select2-search--dropdown .select2-search__field', '8423 90 000').then(
      result => {
        setSelect2Value('#form2-industryid', '.select2-search--inline .select2-search__field', 'Машиностроение').then(
            result => {
              setSelect2Value('#form2-industryid', '.select2-search--inline .select2-search__field', 'Сельско').then(
                  result => {
                    $('#form2-industrialplatformid option[value=17718127]').attr('selected','selected');
                  }
                )
            }
          )
      }
    )
  }
);
});
