function skillsMember() {
    var member = new Member();
    member.skills = ['html', 'css', 'js'];
    member.showSkills = function() {
        console.log(this.skills);
    };

    return member;
}