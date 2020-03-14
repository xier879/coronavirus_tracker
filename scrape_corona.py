import os
from bs4 import BeautifulSoup as bs
import requests
from splinter import Browser
import pandas as pd


def init_browser():
    # @NOTE: Replace the path with your actual path to the chromedriver
    executable_path = {'executable_path':'/Users/roayahelal/Desktop/COLUMBIA UNIVERSITY/WEEK 12/12-Web-Scraping-and-Document-Databases/chromedriver'}
    return  Browser('chrome', **executable_path, headless=False)

def scrape():
    browser = init_browser()
    corona_data = {}

    url_corona = "https://www.worldometers.info/coronavirus/#countries"
    html_corona = requests.get(url_corona)
    html_corona = html_corona.text

    soup_corona = bs(html_corona, 'html.parser')
    corona_table = soup_corona.find(class_="table-bordered")
    corona_table = str(corona_table)

    corona_df = pd.read_html(corona_table)[0]

    #replacing blanks with 0
    corona_df.fillna(0,inplace = True)

    #removing the total row)
    corona_df = corona_df[~corona_df['Country,Other'].isin(['Total:', 'Total', 'total'])]
    corona_data["full_new"] = corona_df.to_csv()
    #replace items using wild card and regex to have that applied
    corona_df["NewCases"].replace("\,","",regex = True, inplace = True)
    corona_df["NewCases"].replace("\+","", regex = True, inplace = True)
    corona_df["NewCases"] = corona_df["NewCases"].astype("float")
    corona_df["Date"]= dt.datetime.today()
    
    countries_df = pd.read_csv("country_lan_lng.csv",engine='python')
    merged = corona_df.merge(countries_df, left_on='Country,Other', right_on='name')
    df_used = merged.drop(countries_df.columns[0:-2], axis=1)

    df_used.rename(columns={"Country,Other":"Country","Serious,Critical": "CriticalCases"}, inplace = True)
    #replace items using wild card and regex to have that applied
    df_used["NewCases"].replace("\,","",regex = True, inplace = True)
    df_used["NewCases"].replace("\+","", regex = True, inplace = True)


    corona_data["csv"] = df_used.to_csv()
    corona_data["html"] = df_used.to_html()
    corona_data["json"] = df_used.to_json(orient='records')
   

    return corona_data