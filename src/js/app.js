import $ from 'jquery';
import 'bootstrap'
import toastr from 'toastr'

$('#click').on('click', () => {
    toastr.success('Başarılı')
})