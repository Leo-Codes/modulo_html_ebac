$(document).ready(function() {
    const list_body = $('#list-body');
    const input_field = {
        task_input: $('#task-input'),
        add_btn: $('#add-btn'),
    }

    function start(){
        input_field.add_btn.click(function(){
            add_task(input_field.task_input.val());
        })
    }

    function create_task_element(description){
        let task_div = $(document.createElement('div')).addClass('task');

        let task_checkbox = $(document.createElement('input')).attr('type', 'checkbox');
        task_checkbox.attr('data-reference', description);

        let task_description = $(document.createElement('a')).addClass('task-description').text(description);
        task_description.attr('id', description);

        let delete_button = $(document.createElement('i')).addClass('fi fi-rr-trash delete-icon');
        delete_button.click(function(){
            task_div.remove();
        });

        task_checkbox.on('change',function(){
            if(this.checked){
                task_description.addClass('done');
            }

            if(!this.checked){
                let description_id = $(this).attr('data-reference');
                task_description.removeClass('done');

            }
        })

        task_div.append(task_checkbox);
        task_div.append(task_description);
        task_div.append(delete_button);

        

        return(task_div);
    }

    function add_task(task_description){

        let task_element = create_task_element(task_description);
        list_body.append(task_element);

    }

    start();
    add_task("Contratar o Leo");

});