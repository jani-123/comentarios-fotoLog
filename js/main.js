const app  = {
    item :  {
        name: undefined,
        comment: undefined
    },
    init : function () {
        app.item.name =   $('#nombre');
        app.item.comment =   $('#comentarios');

        app.setup ();
    },

    setup: function () {
        $('#btnGuardar').click (app.addComment) ;
        $('#btnLimpiar').click (app.clearComments) ;
    },

    addComment: function (event) {
        $('#addComentario').append ( `<p> ${app.item.name.val()} </p>\
                            <p>  ${app.item.comment.val()} </p>`);

    },

    clearComments: function (event) {
        $('#addComentario').empty();
    }
};
$(document).ready ( app.init );
