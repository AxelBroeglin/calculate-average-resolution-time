var getAverageResolutionTime = Class.create();
getAverageResolutionTime.prototype = {
    initialize: function() {
        //Accept assignmentGroup as param
        var assignmentGroup = this.getParameter('sysparm_assignment_group');

        //GlideRecord to all closed incidents with said assignment group
        var getIncidents = new GlideRecord('incident');
        getIncidents.addQuery('state', '7');
        getIncidents.addQuery('assignment_group', assignmentGroup);
        getIncidents.query();

        //Count the returned incidents
        var numberOfIncidents = getIncidents.getRowCount();
        //Create the total resolution time variable and set it to 0
        var totalResolutionTime = 0;

        //Loop through returned inc to sum up resolution times
        while (getIncidents.next()) {
            //parseFloat to convert string to a floating-point number
            totalResolutionTime += parseFloat(getIncidents.getValue('u_resolution_time_2'));
        }
      
        //Calculate the average resolution time
        var averageResolutionTime = totalResolutionTime / numberOfIncidents;
        return averageResolutionTime;
    },

    type: 'getAverageResolutionTime'
};
