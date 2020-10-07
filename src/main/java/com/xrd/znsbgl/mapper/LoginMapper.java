package com.xrd.znsbgl.mapper;

import com.xrd.znsbgl.entity.Admin;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface LoginMapper {
    //处理登录信息
    public Admin login(Admin admin);
}
