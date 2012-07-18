/// <reference path="../Src/knockout.validation.js" />

/************************************************
* This is an example localization page. All of these
* messages are the default messages for ko.validation
* 
* Currently ko.validation only does a single parameter replacement
* on your message (indicated by the {0}).
*
* The parameter that you provide in your validation extender
* is what is passed to your message to do the {0} replacement.
*
* eg: myProperty.extend({ minLength: 5 });
* ... will provide a message of "Please enter at least 5 characters"
* when validated
*
* This message replacement obviously only works with primitives
* such as numbers and strings. We do not stringify complex objects 
* or anything like that currently.
*/

ko.validation.localize({
    required: "必須項目です",
    maxLength: "{0} 文字以下を入力してください",
    minLength: "{0} 文字以上を入力してください",
    rangelength: "{0} 文字以上 {1} 文字以下で入力してください",
    email: "メールアドレスを入力してください",
    url: "URLを入力してください",
    dateISO: "日付を入力してください",
    number: "有効な数字を入力してください",
    digits: "0-9までを入力してください",
    equalTo: "同じ値を入力してください",
    range: " {0} から {1} までの値を入力してください",
    max: "{0} 以下の値を入力してください",
    min: "{0} 以上の値を入力してください",
    creditcard: "クレジットカード番号を入力してください",
    pattern: 'チェックしてください',
    step: '{0}ごとの値にしてください',
    date: '日付を入力してください',
    phoneUS: '電話番号を入力してください',
    equal: '等しい値入力してください',
    notEqual: '別の値を入力してください',
    unique: '別の値を入力してください'
});