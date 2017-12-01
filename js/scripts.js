$(document).ready(function() {
  $("form#quiz").submit(function() {
    var question1 = $("select#question1").val();
    var question2 = $("select#question2").val();
    var question3 = $("select#question3").val();
    var question4 = $("select#question4").val();
    var question5 = $("select#question5").val();

    if (question1=== 'large' && question2==='popular' && question3==='familiar' || question3==='diverse' && question4==='design' || questio4==='function' && question5==='simple') {
      $ ('#java').show();
      $ ('#ruby').hide();
      $ ('#chash').hide();
      $ ('#css').hide();
      $ ('#php').hide();
    }
    else if (question1=== 'large' && question2==='popular' || question2==='unique' && question3==='diverse' || question3==='familiar' && question4==='function' && question5==='simple') {
      $ ('#java').hide();
      $ ('#ruby').hide();
      $ ('#chash').show();
      $ ('#css').hide();
      $ ('#php').hide();
    }
    else if (question1=== 'large' || question1==='small' && question2==='unique' && question3==='diverse' || question3==='familiar' && question4==='design' && question5==='simple') {
      $ ('#java').hide();
      $ ('#ruby').hide();
      $ ('#chash').hide();
      $ ('#css').show();
      $ ('#php').hide();
    }
    else if (question1=== 'small' || question1==='large' && question2==='popular' && question3==='familiar' || question3==='diversity' && question4==='function' && question5==='different') {
      $ ('#java').hide();
      $ ('#ruby').show();
      $ ('#chash').hide();
      $ ('#css').hide();
      $ ('#php').hide();
    }
    else if (question1=== 'small' || question1==='large' && question2==='unique' && question3==='diverse' || question3==='familiar' && question4==='function' && question5==='different') {
      $ ('#java').hide();
      $ ('#ruby').hide();
      $ ('#chash').hide();
      $ ('#css').hide();
      $ ('#php').show();

    } else {
      $ ('#java').show();
      $ ('#ruby').hide();
      $ ('#chash').hide();
      $ ('#css').hide();
      $ ('#php').hide();
    }
    event.preventDefault();
  });
});
