from django import forms

class ContactForm(forms.Form):
    content = forms.CharField(
        label='testing',
        required=True,
        widget=forms.TextInput(attrs={'placeholder': 'testing'})
    )