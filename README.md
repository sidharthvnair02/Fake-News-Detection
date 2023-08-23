
# Fake-News-Detection

Project By: 

*Sidharth Nair - 16010120032*,
*Rahi Patil - 16010120038*,


Mentor: Mrs Smita Sankhe 


# Problem Statement:
Develop a methodology for identifying fake news by leveraging online newspapers and social media platforms through text scraping. The accuracy of the proposed approach
will be evaluated using several machine learning algorithms. This research aims to contribute to the ongoing efforts to combat the dissemination of misleading 
information by providing an effective and reliable means of detecting fake news


# Motivation:
Now-a-days no one reads newspapers. Everyone is dependent on the virtual world to get the news which is happening around. But one can not trust the source of the
information which is passed in this virtual world and believes whatever information they get. This increases the risk of fake news and misconceptions among the real world.To reduce the risk of such fake news and misconceptions we are proposing a Fake News Detection System using Machine Learning models which will automatically
detect the wrong information being passed and would reduce the fake rumours about something and also reduce the misconception among the real world.

# Scope:
Our project's focus is identifying bogus news on social media. We want to distinguish between legitimate and bogus news, identify it, and stop it from spreading. We aim to use machine learning algorithms to categorize news stories as bogus or real. Using machine learning methods, we hope to improve the effectiveness of fake news identification and determine which model gives us the most accurate result. Our aim is to create a user friendly software for the user as well as online news providers who post news online.

# Objectives:
The primary objective of the proposed system is to examine and research the hidden correlations and patterns between the data in the fake news dataset. The problem's
answer could offer knowledge to stop the spread of bogus or actual news, which would have significant societal and technological repercussions. Most of the existing research uses various models to handle each of these issues separately. Dealing with fake news gets increasingly crucial because it is one of the essentials that is crucial for society.


# System Architecture :

![image](https://user-images.githubusercontent.com/82643868/235761228-88407a10-c0fe-4370-b59b-535cd901e14f.png)

# Proposed System Model Implementation:
Our proposed system starts with data scraping from the website politifacts.com. The scraped data is then classified as real or fake using a metric. Further, we visualized the real and fake news using word clouds. We then applied various preprocessing techniques such as regular expressions, tokenization, stop word removal, and lemmatization to clean the data. We also applied different feature extraction techniques such as count vectorizer/bag of words and tf-idf to extract relevant features from the data. Finally, we trained several machine learning models such as logistic regression, random forest, and naive Bayes to detect fake news.

We built a web application using React for the frontend and Flask for the backend. The user interface of the app included four input fields for the author, date, statement, and source of a news article, and the app would analyze the input to determine if the news was real or fake. If the news was real, the user would see a message indicating that the news was "true," and if it was fake, the user would see a message indicating that the news was "false,". The app provided an efficient and accurate means of detecting fake news.

# Experimental Results and Its Analysis :
The experimental results showed that the proposed system model achieved high accuracy in detecting fake news articles. The model's performance was evaluated using metrics such as precision, recall, and F1-score. The analysis of the results revealed the effectiveness of the feature extraction and classification techniques 
used in the model.

The scores of various models:
1. Logistic Regression
• Accuracy: 0.921885087153002
• Precision: 0.8961352657004831
• Recall: 0.954954954954955
• F1 Score: 0.9246105919003116

![confusion_matrix_logistic_regression](https://user-images.githubusercontent.com/82643868/235762187-0556c921-2527-4e23-b53c-c3448702e47b.png)

2. Random Forest
• Accuracy: 0.9457714654615881
• Precision: 0.9090909090909091
• Recall: 0.990990990990991
• F1 Score: 0.9482758620689654

![confusion_matrix_random_forest](https://user-images.githubusercontent.com/82643868/235762232-ed5b4c05-0589-4e4f-8da4-1ff24cac4201.png)

3. Naïve Bayes:
• Accuracy: 0.9186571981923822
• Precision: 0.8745684695051784
• Recall: 0.9781209781209781
• F1 Score: 0.9234507897934386

![confusion_matrix_naivebayes](https://user-images.githubusercontent.com/82643868/235762282-46940bb0-b5e9-4343-a499-2a608a8bf27f.png)



# Screenshots 
![Home](https://user-images.githubusercontent.com/82643868/236485825-2933e7cf-0caf-4225-bfe3-ff4fc81661d2.png)

![Register](https://user-images.githubusercontent.com/82643868/236485541-47a0b539-b0fe-4e10-a709-069411ace7ae.png)

![Login](https://user-images.githubusercontent.com/82643868/236485887-00c22bcc-3c8d-4fad-80ad-051b3af12100.png)

![Checker](https://user-images.githubusercontent.com/82643868/236485378-85b9341c-8973-4131-b5fa-737cee287214.png)

![News1](https://user-images.githubusercontent.com/82643868/236485748-e1e8b350-b3d5-4e05-bf3e-0983d6454878.png)

![Real](https://user-images.githubusercontent.com/82643868/236485954-24eae57d-c6cd-4647-85e5-f51a23f51d46.png)

![News2](https://user-images.githubusercontent.com/82643868/236485998-dd7c21e9-82e8-40ce-98f8-80c32fae0ff8.png)

![Fake](https://user-images.githubusercontent.com/82643868/236486050-fcbd9b67-5678-45a8-8e4c-6526faf6b235.png)


