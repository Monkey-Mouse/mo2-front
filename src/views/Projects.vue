<template>
  <div>
    <v-parallax
      src="https://cdn.mo2.leezeeyee.com/material.jpg~parallax"
      height="200"
    >
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1
            @click="$router.push('/about')"
            class="display-1 font-weight-thin mb-4 clickable"
          >
            {{$t('home.mo2')}}
          </h1>
          <h4 @click="$router.push('/about')" class="subheading clickable">
            {{$t('home.description')}}
          </h4>
        </v-col>
      </v-row>
    </v-parallax>
    <v-container class="fill-height">
      <v-timeline
        v-if="datalist && datalist.length > 0"
        :dense="this.$vuetify.breakpoint.smAndDown"
        class="mx-auto"
      >
        <v-timeline-item
          v-for="(p, i) in datalist"
          :key="i"
          :large="!$vuetify.breakpoint.smAndDown"
          :color="displayColors[i % displayColors.length]"
        >
          <template v-slot:opposite>
            <time-ago
              :refresh="60"
              :datetime="
                p.EntityInfo
                  ? p.EntityInfo.updateTime
                  : p['EntityInfo.updateTime']
              "
              tooltip
              long
            ></time-ago>
          </template>
          <ProjectItem
            :project="p"
            :color="displayColors[i % displayColors.length]"
          ></ProjectItem>
        </v-timeline-item>
      </v-timeline>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { colors } from "vuetify/lib";
import ProjectItem from "@/components/ProjectItem.vue";
import { ListProject, AutoLoader, ElmReachedBottom } from "@/utils";
import { Project } from "@/models";
import { TimeAgo } from "vue2-timeago";
@Component({
  components: { ProjectItem, TimeAgo },
})
export default class Projects extends Vue implements AutoLoader<Project> {
  page = 0;
  pagesize = 10;
  firstloading: boolean;
  loading = false;
  nomore = false;
  datalist: Project[] = [];
  displayColors: string[] = [];
  public ReachedButtom() {
    ElmReachedBottom(this, ({ page, pageSize }) =>
      ListProject({
        Page: page,
        PageSize: pageSize,
      })
    );
  }
  async created() {
    this.displayColors = Object.getOwnPropertyNames(colors);
    this.ReachedButtom();
  }
}
</script>
<style>
</style>
