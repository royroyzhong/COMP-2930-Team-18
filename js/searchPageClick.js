$(document).ready(function () {
    //            $('#logo').on('click', function() {
    //
    //                $('#submit').addClass('displayNone');
    //                $('#trysearchBarKeyWord').hide();
    //
    //
    //            });
    $('#trycamera').on('click', function () {
        $("#logo").hide();
        $('.uploadimg').show();
        $('#trysearchBarKeyWord').hide();
        $('#trysearch').hide();
        $('#tryImg').addClass("forImageUpload");
        $('#trycamera').hide();
        $("#iambtn").show();

        $("#imageUpload").fileinput({

            previewFileType: "image",
            browseClass: "btn btn-success",
            browseLabel: "Pick Image",
            browseIcon: "<i class=\"glyphicon glyphicon-picture\"></i> ",
            removeClass: "btn btn-danger",
            removeLabel: "Delete",
            removeIcon: "<i class=\"glyphicon glyphicon-trash\"></i> ",
            uploadClass: "btn btn-info",
            uploadLabel: "Upload",
            uploadIcon: "<i class=\"glyphicon glyphicon-upload\"></i> ",
            
        });

    });



});
