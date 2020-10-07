package com.xrd.znsbgl.entity;

import java.io.Serializable;

/**
 * (Uploadimg)实体类
 *
 * @author makejava
 * @since 2020-07-13 16:57:26
 */
public class Uploadimg implements Serializable {
    private static final long serialVersionUID = 558150214280077869L;

    private Integer id;
    private String imgbase64;
    private String imgurl;


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }


    public String getImgbase64() {
        return imgbase64;
    }

    public void setImgbase64(String imgbase64) {
        this.imgbase64 = imgbase64;
    }


    public String getImgurl() {
        return imgurl;
    }

    public void setImgurl(String imgurl) {
        this.imgurl = imgurl;
    }

    @Override
    public String toString() {
    
        return "Uploadimg{" +
                 "id=" + id+","+     
                 "imgbase64='" + imgbase64 +"'"+","+     
                 "imgurl='" + imgurl +"'"     
              +"}"; 
    }

}