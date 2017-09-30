'use strict';

import Realm from 'realm';

class Question extends Realm.Object {}

Question.schema = {
    name: 'Question',
    properties: {
        analysis: {type: 'string', optional: true},
        answer: 'string',
        category_of_problem: 'string',
        expand: {type: 'string', optional: true},
        number: 'int',
        option_A: {type: 'string', optional: true},
        option_B: {type: 'string', optional: true},
        option_C: {type: 'string', optional: true},
        option_D: {type: 'string', optional: true},
        paraphrase: {type: 'string', optional: true},
        province: {type: 'string'},
        recipe: {type: 'string', optional: true},
        type_of_problem: {type: 'string', optional: true},
        uid: 'string',
        type: 'string',
        name_of_paper: 'string',
    }
}