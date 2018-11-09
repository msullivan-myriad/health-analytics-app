import myfitnesspal
import json

client = myfitnesspal.Client('michaelrsullivan1')

daysList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
month = 7

print '['

for x in daysList:
    day = client.get_date(2018, month, x)
    print '{'

    #Content of the single day object

    print '\"date\": \"' + str(month) + '/' + str(x) + '/2018\",'
    print '\"data\":' + json.dumps(day.totals) + ','
    print '\"foods\": ['

    #Loop over the meals object and get every single food eaten for the day

    isNotFirstFoodPrinted = False

    for meal in day.meals:

        for entry in meal.entries:

            #Every element in this list should have a comma afterwards other than the first item
            if isNotFirstFoodPrinted:
                print ','

            isNotFirstFoodPrinted = True


            entryString = str(entry)
            #Entry already has nutrition data for each and every food item if this needs to be extended
            print '\"' + entryString.split(',')[0] + '\"'

    print ']'


    #End of the single day object
    print '}'
    if x != 30:
        print ','


print ']'
