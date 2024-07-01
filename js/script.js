const $saveBtn = $('#save-note');

function createNote() {
  const $titleInput = $('#title-input');
  const $textInput = $('#text-input');
  const $dateInput = $('#date-input');
  const dateStr = $dateInput.val();
  const currentTime = dayjs();

  const dateTime = dayjs(dateStr)
    .hour(currentTime.hour())
    .minute(currentTime.minute())
    .second(currentTime.second());

  console.log($titleInput.val())
  console.log(dateTime.format('ddd MMM, DD YYYY hh:mm:ss a'))
}

$saveBtn.on('click', createNote);
$('#date-input').datepicker();